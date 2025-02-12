import axios from "@/service/axios";
import { ResponseBody } from "./types";
import {
  LoginRequest,
  LoginResponse,
  LogoutResponse,
  UserProfileResponse,
} from "@/@types/auth";

type ILoginRequest = (
  params: LoginRequest
) => Promise<ResponseBody<LoginResponse>>;
export const loginRequest: ILoginRequest = async (data) => {
  return axios({
    method: "POST",
    url: `/user/jwt/login`,
    data,
  }).then((res) => res.data);
};

type ILogoutRequest = () => Promise<ResponseBody<LogoutResponse>>;
export const logoutRequest: ILogoutRequest = async () => {
  return axios({
    method: "POST",
    url: `/user/jwt/logout`,
  }).then((res) => res.data);
};

type IUsetProfileRequest = () => Promise<ResponseBody<UserProfileResponse>>;
export const getUserProfileRequest: IUsetProfileRequest = async () => {
  return Promise.resolve({
    action: true,
    data: {
      id: 7097,
      instance_id: 1,
      username: "mobile_989190707432_98260",
      first_name: "مجید",
      last_name: "ارجنه",
      father_name: null,
      national_code: null,
      birthday: null,
      country_id: null,
      state_id: null,
      city_id: null,
      gender: null,
      marital: null,
      avatar: "https://cafeerent.com/assets/img/user/user-1.jpeg",
      avatar_confirm: 1,
      confirm: 1,
      info: '{"signature":null,"in_black_list":"0","text_reason_black_list":null,"text_sheba_number_bank":null,"sheba_number_bank":"IR-9401-2002-0000-0020-5016-1180","text_sheba_1":null,"sheba_1":"IR-9401-2002-0000-0020-5016-1180","text_sheba_2":null,"sheba_2":null,"text_sheba_3":null,"sheba_3":null,"text_bank_account_number":null,"bank_account_number":null,"text_cart_number":null,"cart_number":null,"mobile":"989108726060","phone":"02187260"}',
      created_at: "2021-10-27 12:57:39",
      updated_at: "2025-01-01 10:44:21",
      deleted_at: null,
      small_avatar_url: "https://cafeerent.com/assets/img/user/user-1.jpeg",
    },
  });
  // return axios({
  //   method: "POST",
  //   url: `/user/jwt/logout`,
  // });
};
