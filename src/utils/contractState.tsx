import { ContractState } from "@/@types/contracts";
import React from "react";

type ContractStateType = (state: string) => React.ReactNode;

export const contractState: ContractStateType = (state) => {
  switch (state) {
    case ContractState.EditingStarted:
      return <span className="text-yellow-600">درحال ویرایش</span>;
    case ContractState.EditingCompleted:
      return <span className="text-green-600">تکمیل ویرایش</span>;
    case ContractState.SigningStarted:
      return <span className="text-yellow-600">درحال امضا</span>;
    case ContractState.Completed:
      return <span className="text-green-600">تکمیل</span>;
    default:
      return <span className="text-yellow-600">درحال انتظار</span>;
  }
};
