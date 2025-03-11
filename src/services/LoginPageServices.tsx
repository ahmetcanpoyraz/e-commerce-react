import { Axios, AxiosResponse } from "axios";
import axiosInstance from "../config/AxiosConfix";
import { UserType } from "../types/Types";

class LoginPageService {
  login(): Promise<UserType[]> {
    return new Promise((resolve: any, reject: any) => {
      axiosInstance
        .get("/users")
        .then((response: AxiosResponse<any, any>) => resolve(response.data))
        .catch((error: any) => reject(error));
    });
  }
}

export default new LoginPageService();
