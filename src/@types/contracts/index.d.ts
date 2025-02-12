import { Params } from "@/requests/types";

export * from "./contracts-details";
export * from "./contracts-item";

export enum ContractState {
  EditingStarted = "EditingStarted",
  EditingCompleted = "EditingCompleted",
  SigningStarted = "SigningStarted",
  Completed = "Completed",
}

export type GetContractRequest = Params<{
  contractId: string;
  relation?: "person_return" | "person_pickup";
}>;

export type GetContractRequest = Params<{
  contractId: string;
  relation?: "person_return" | "person_pickup";
}>;

export type GetContractListRequest = Params<{
  page: number;
  pageSize?: number;
  title?: string;
  relation?: "person_return" | "person_pickup";
}>;
