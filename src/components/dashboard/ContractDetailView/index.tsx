import React, { useMemo } from "react";
import Title from "@/components/common/Title";
import { ContractDetail } from "@/@types/contracts";
import ContractUploadFile from "./ContractUploadFile";
import { UploadFile } from "antd/lib";
import { BASE_STORAGE } from "@/constants";
import { Button } from "antd";
import ContractDetailContent from "./ContractDetailContent";

type Props = {
  contract: ContractDetail;
};

const ContractDetailView: React.FC<Props> = ({ contract }) => {
  const defaultFileList: UploadFile[] = useMemo(() => {
    const docs = contract.params_array.contract_doc_operator;

    if (docs) {
      return Object.entries(docs).reduce(
        (acc: any[], item: [string, string[]]) => {
          const files = Object.values(item[1]).map((url) => ({
            uid: url,
            url: `${BASE_STORAGE}${url}`,
            name: url.substring(url.lastIndexOf("/") + 1),
            status: "done",
          }));
          return [...acc, ...files];
        },
        []
      );
    }
    return [];
  }, [contract]);
  return (
    <>
      <div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <Title>{contract.title}</Title>
          <div className="flex items-center gap-2">
            <span>شماره قرارداد:</span>
            <strong className="font-yekanBakhEn">
              {contract.contract_number}
            </strong>
          </div>
        </div>
      </div>
      <div className="rounded-xl bg-white px-4 py-4 md:px-8 mt-4">
        <div className="flex flex-col gap-8 py-8">
          <ContractDetailContent contract={contract} />

          <section>
            <ContractUploadFile defaultFileList={defaultFileList} />
          </section>

          <section>
            <Button
              type="primary"
              shape="default"
              size="large"
              className="w-full text-lg font-bold"
            >
              مشاهده و امضا قرارداد
            </Button>
          </section>
        </div>
      </div>
    </>
  );
};

export default ContractDetailView;
