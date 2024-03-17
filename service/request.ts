import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

class httpRequest {
  instance: AxiosInstance; // 1.声明instance的类型
  constructor(config: AxiosRequestConfig) {
    // 2.创建axios实例
    this.instance = axios.create(config);
  }
  // 3.编写request函数，request的T是指定响应结果res.data的类型
  request<T>(config: AxiosRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance
        .request<T, AxiosResponse<T>>(config) // 4.调用的instance.request
        .then((res) => {
          // 5.将结果resolve返回出去
          // console.log(res.data);
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
          return err;
        });
    });
  }
  // 发起get请求，T 代表是响应结果res.data的类型
  get<T = any>(url: string, params?: any, headers?: any): Promise<T> {
    return this.request<T>({ url, params, headers, method: "GET" });
  }
  post<T = any>(url: string, data?: any, headers?: any): Promise<T> {
    return this.request<T>({ url, data, headers, method: "POST" });
  }
}
export default httpRequest;
