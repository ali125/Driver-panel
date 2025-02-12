import { AxiosRequestConfig } from "axios";

export type ResponseBody<T> = {
  action: boolean;
  data?: T;
  message?: string;
};

export type ResponseLitBody<T> = {
  action: boolean;
  data: {
    current_page: number;
    data: T;
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
  };
  message?: string;
};

export type Params<T> = T & { options?: AxiosRequestConfig };
