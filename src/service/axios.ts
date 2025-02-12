import { BASE_URL, TOKEN_STORE, WSTOKEN } from "@/constants";
import axiosNative from "axios";

// Create axios instance
const axios = axiosNative.create({
  baseURL: BASE_URL,
});

axios.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem(TOKEN_STORE);
    if (token) {
      config.headers.set("authorization", `Bearer ${token}`);
    }

    // Do something before request is sent
    if (config.method?.toLocaleLowerCase() === "post") {
      config.data = {
        ...config.data,
        wstoken: WSTOKEN,
      };
    }
    if (config.method?.toLocaleLowerCase() === "get") {
      config.params = {
        ...config.params,
        wstoken: WSTOKEN,
      };
    }
    return config;
  },

  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default axios;
