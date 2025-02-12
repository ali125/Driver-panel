import axios from "@/service/axios";
import { ResponseBody, ResponseLitBody } from "./types";
import {
  ContractDetail,
  ContractItem,
  GetContractListRequest,
  GetContractRequest,
} from "@/@types/contracts";

type GetContract = (
  params: GetContractRequest
) => Promise<ResponseBody<ContractDetail>>;

export const getContract: GetContract = async ({
  contractId,
  relation,
  options,
}) => {
  return axios({
    ...options,
    method: "GET",
    url: `/contract/operator/list/show/${contractId}/${relation}`,
  }).then((res) => res.data);
};

type GetContractList = (
  params: GetContractListRequest
) => Promise<ResponseLitBody<ContractItem[]>>;
export const getContractList: GetContractList = async ({
  page,
  relation,
  title,
  options,
}) => {
  return axios({
    ...options,
    method: "GET",
    url: `/contract/operator/list/${relation}`,
    params: {
      page,
      title,
    },
  }).then((res) => res.data);
};
