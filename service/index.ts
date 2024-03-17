import httpRequest from "./request";
let BASE_URL = "http://codercba.com:9060/music-next/api"; //  默认基础的URL
export interface ResultData<T> {
  code: number;
  data: T;
  banners?: any;
}
const TIME_OUT = 10000; // 默认超时时间
export default new httpRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
});
