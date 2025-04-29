import config from "../config";
import paramsEncoder from "../utils/paramsEncoder";
import Axios from "axios";
import refreshContext from "./refreshContext";
import { refreshToken } from "./user.service";
import store from "../redux/store";
import { logout, updateToken } from "../redux/slices/infoSlice";

const axiosInstance = Axios.create({
  baseURL: config.API_ENDPOINT,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  },
  paramsSerializer: paramsEncoder,
});

axiosInstance.interceptors.request.use(
  (requestConfig) => {
    requestConfig.headers.TIMESTAMP = new Date().toISOString();
    requestConfig.headers.TIMEZONE =
      Intl.DateTimeFormat().resolvedOptions().timeZone;

    const accessToken = store.getState().info.accessToken;
    if (accessToken && !requestConfig.url.endsWith("refresh-token")) {
      requestConfig.headers.Authorization = accessToken.includes("Bearer")
        ? accessToken
        : `Bearer ${accessToken}`;
    } else {
      requestConfig.headers.Authorization = "";
    }

    return requestConfig;
  },
  (error) => {
    throw error;
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error?.response?.status === 401 &&
      error.config.url.endsWith("refresh-token")
    ) {
      return Promise.reject(error);
    } else if (error?.response?.status === 401 && !originalRequest._retry) {
      if (refreshContext.isRefreshing) {
        try {
          const token = await new Promise((resolve) => {
            refreshContext.resolverList.push((newToken) => {
              resolve(newToken);
            });
          });

          originalRequest.headers["Authorization"] = token;
        } catch (error) {
          throw error;
        }
      }

      originalRequest._retry = true;
      if (!refreshContext.isRefreshing) {
        refreshContext.isRefreshing = true;

        const { success, result } = await refreshToken();
        if (!success) {
          store.dispatch(logout());
          throw error;
        } else {
          store.dispatch(updateToken({ token: result.accessToken }));
          if (success) {
            refreshContext.isRefreshing = false;
            refreshContext.resolverList.forEach((cb) => cb(result.accessToken));
            refreshContext.resolverList = [];
          }

          originalRequest.headers["Authorization"] = result.accessToken;
        }
      }

      return axiosInstance(originalRequest);
    } else {
      throw error;
    }
  }
);

export default axiosInstance;
