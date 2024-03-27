import { BASE_URL } from "./index";
import httpRequest from "./index";

import type { ResultData } from "./index";

export interface ISearchSuggest {
  id: number;
  defaultKey: string;
  configKey: Array<any>;
}
export interface IProduct {
  hasMore: boolean;
  count: number;
  hotProduct?: Array<any>;
  allProduct?: Array<any>;
}

export interface IHomeInfo {
  banners?: any[];
  categorys?: any[];
  recommends?: any[];
  digitalData?: any;
}

// 获取首页其它信息
export const getHomeInfoData = () => {
  return httpRequest.get<ResultData<IHomeInfo>>("/home/info");
};

// 获取搜索推荐
export const getSearchSuggestData = () => {
  return httpRequest.get<ResultData<ISearchSuggest>>("/searchsuggest/get");
};

// 获取编辑推荐商品
export const getHotProductV2Data = () => {
  return httpRequest.get<ResultData<IProduct>>("/hotproduct_v2/gets");
};

// 获取所有的热门商品
export const getAllProductData = () => {
  return httpRequest.get<ResultData<IProduct>>(
    "/allProduct/gets?limit=60&offset=0"
  );
};

// 服务端接口
export const fetchHomeInfoData = () => {
  return BASE_URL + "/home/info";
};
export const fetchSearchSuggestData = () => {
  return BASE_URL + "/searchsuggest/get";
};
export const fetchHotProductV2Data = () => {
  return BASE_URL + "/hotproduct_v2/gets";
};
export const fetchAllProductData = () => {
  return BASE_URL + "/allProduct/gets?limit=60&offset=0";
};
