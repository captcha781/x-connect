import handleResponse from "../utils/handleResponse";
import axios from "./AxiosService";

export const refreshToken = async () => {
  try {
    const response = await axios({
      url: "/auth/user/refresh-token",
      method: "POST",
      data: {},
    });

    return handleResponse(response, "success");
  } catch (error) {
    return handleResponse(error, "error");
  }
};
