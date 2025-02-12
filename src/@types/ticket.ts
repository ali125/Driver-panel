import { ContractState } from "./contracts";

export enum TicketState {
  WaitingForAnswer = "WaitingForAnswer",
  EditingCompleted = "EditingCompleted",
  SigningStarted = "SigningStarted",
  Completed = "Completed",
}

export type TicketCategoryItem = {
  desc: string;
  label: string;
  name: string;
};

export type TicketItem = {
  id: string;
  shortId: 9;
  category: {
    name: string;
    label: string;
    desc: string;
  };
  subject: string;
  status: TicketState;
  creator: {
    authId: string;
    displayName: string;
    phoneNumber: string;
  };
  relatedContracts: {
    id: string;
    title: string;
    state: ContractState;
  }[];
  closedBy: null;
  createdAt: string;
  updatedAt: string;
  closedAt: null;
  _count: {
    messages: number;
  };
};

export type TicketDetail = {
  id: string;
  shortId: number;
  category: {
    name: string;
    label: string;
    desc: string;
  };
  subject: string;
  status: string;
  creator: {
    authId: string;
    displayName: string;
    phoneNumber: string;
  };
  relatedContracts: {
    id: string;
    title: string;
    state: string;
  }[];
  closedBy: null;
  createdAt: string;
  updatedAt: string;
  closedAt: null;
  _count: {
    messages: number;
  };
};

export type ITicketMessageItem = {
  id: string;
  body: string;
  attachments: [
    {
      sizeInKb: 8;
      type: string;
      link: string;
    },
  ];
  ticket: {
    id: string;
    subject: string;
  };
  sender: {
    authId: string;
    displayName: string;
    phoneNumber: string;
  };
  createdAt: string;
  updatedAt: string;
};
