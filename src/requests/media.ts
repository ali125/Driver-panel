import axios from "@/service/axios";
import { ResponseBody } from "./types";
import { SaveContractDocsResponse, UploadMediaResponse } from "@/@types/media";

type UploadFiles = (params: {
  formData: FormData;
}) => Promise<ResponseBody<UploadMediaResponse>>;

export const uploadFiles: UploadFiles = async ({ formData }) => {
  return axios({
    method: "POST",
    url: "/core/media/all_media/upload",
    data: formData,
  }).then((res) => res.data);
};

type SaveContractDocsRequest = (params: {
  contractId: number | string;
  contract_docs: string[];
}) => Promise<ResponseBody<SaveContractDocsResponse>>;

export const saveContractDocsRequest: SaveContractDocsRequest = async ({
  contractId,
  contract_docs,
}) => {
  return axios({
    method: "POST",
    url: `/contract/operator/customer/doc/${contractId}/save`,
    data: { contract_docs },
  }).then((res) => res.data);
};
