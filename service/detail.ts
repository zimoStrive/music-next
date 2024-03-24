import httpRequest from "./index";

import type { ResultData } from "./index";

export interface IDetailProduct {
  id: number;
  webPic: string;
  mobilePic: string;
  productNum?: number;
  products?: any[];
}

// 获取详情数据
export const getProductDetailData = (id: string) => {
  return httpRequest.get<ResultData<IDetailProduct>>(
    `/special/getdetail?specialTopicId=${id}`
  );
};
