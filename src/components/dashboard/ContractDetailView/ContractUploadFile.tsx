import React, { useState } from "react";
import { Upload } from "antd";
import type { GetProp, UploadFile, UploadProps } from "antd";
import ImgCrop from "antd-img-crop";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import toast from "react-hot-toast";
import { UploadChangeParam } from "antd/lib/upload";
import { BASE_STORAGE, BASE_URL, WSTOKEN } from "@/constants";
import { UploadMediaResponse } from "@/@types/media";
import { useMutation } from "@tanstack/react-query";
import { saveContractDocsRequest } from "@/requests/media";
import { useParams } from "next/navigation";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const beforeUpload = (file: FileType) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    toast.error("فایل باید فرمت JPG/PNG باشد!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    toast.error("فایل باید کمتر از ۲ مگابایت باشد!");
  }
  return isJpgOrPng && isLt2M;
};

type Props = {
  defaultFileList: UploadFile[];
};

const ContractUploadFile: React.FC<Props> = ({ defaultFileList }) => {
  const [fileList, setFileList] = useState<UploadFile[]>(defaultFileList);
  const [loading, setLoading] = useState<boolean>(false);

  const params = useParams();
  const contractId = params.contractId as string;

  const saveContractDocsMutation = useMutation({
    mutationFn: saveContractDocsRequest,
  });

  const handleRemove = (file: UploadFile<UploadMediaResponse>) => {
    const list = [...fileList];

    const index = list.findIndex((f) => f.uid === file.uid);
    list.splice(index, 1);
    const contract_docs = list.map((file) => {
      const url = file.url || "";
      if (url.includes(BASE_STORAGE)) {
        return url.substring(BASE_STORAGE.length);
      }
      return url;
    });
    saveContractDocsMutation.mutate({
      contractId,
      contract_docs,
    });
  };

  const handleChange: UploadProps["onChange"] = (
    info: UploadChangeParam<UploadFile<UploadMediaResponse>>
  ) => {
    const uid = info.file.uid;

    setFileList(info.fileList);
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }

    if (info.file.status === "done") {
      setLoading(false);
      if (info.file.response && info.file.response?.data.action) {
        const imgItem = info.file.response?.data?.items;
        const imgUrl = imgItem.src;
        setFileList((prev) => {
          const updatePrev = [...prev];
          const index = updatePrev.findIndex((i) => i.uid === uid);
          updatePrev[index].status = "uploading";
          return updatePrev;
        });

        const prevUrls = fileList.map((file) => {
          const url = file.url || "";
          if (url.includes(BASE_STORAGE)) {
            return url.substring(BASE_STORAGE.length);
          }
          return url;
        });
        saveContractDocsMutation.mutate(
          {
            contractId,
            contract_docs: [...prevUrls, imgUrl],
          },
          {
            onSuccess: (data) => {
              if (data?.action && data?.data) {
                setFileList((prev) => {
                  const updatePrev = [...prev];
                  const index = updatePrev.findIndex((i) => i.uid === uid);
                  updatePrev[index].status = "done";
                  updatePrev[index].url = imgUrl;
                  return updatePrev;
                });
              } else {
                toast.error(data.message);
              }
            },
          }
        );
      }
    }
  };

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as FileType);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  return (
    <ImgCrop rotationSlider modalTitle="ویرایش تصویر">
      <Upload
        accept="image/png,image/jpg,image/jpeg"
        multiple={false}
        action={`${BASE_URL}/core/media/all_media/upload?wstoken=${WSTOKEN}`}
        listType="picture-card"
        fileList={fileList}
        name="contract_doc"
        onRemove={handleRemove}
        data={{ input_name: "contract_doc" }}
        // showUploadList={false}
        showUploadList
        onChange={handleChange}
        onPreview={onPreview}
        beforeUpload={beforeUpload}
      >
        <button style={{ border: 0, background: "none" }} type="button">
          {loading ? <LoadingOutlined /> : <PlusOutlined />}
        </button>
      </Upload>
    </ImgCrop>
  );
};

export default ContractUploadFile;
