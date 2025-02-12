export type LoginRequest = {
  password: string;
  connector: string;
};

export type LoginResponse = UserInfo & {
  token: string;
};

export type LogoutResponse = {
  action: boolean;
};

export type UserProfileResponse = UserInfo;

export type UserInfo = {
  id: number;
  instance_id: number;
  username: string;
  first_name: string;
  last_name: string;
  father_name: string | null;
  national_code: string | null;
  birthday: string | null;
  country_id: string | null;
  state_id: string | null;
  city_id: string | null;
  gender: string | null;
  marital: string | null;
  avatar: string;
  avatar_confirm: 1;
  confirm: 1;
  info: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  small_avatar_url: string;
};
