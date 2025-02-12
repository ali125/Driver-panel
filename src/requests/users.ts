import axios from "@/service/axios";

export const getUsers = () => {
  return axios.get("/users");
};
