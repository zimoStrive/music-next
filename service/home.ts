import hyRequest from "./index";

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
  return hyRequest.get<ResultData<IHomeInfo>>("/home/info");
};

// 获取搜索推荐
export const getSearchSuggestData = () => {
  return hyRequest.get<ResultData<ISearchSuggest>>("/searchsuggest/get");
};

// 获取编辑推荐商品
export const getHotProductV2Data = () => {
  return hyRequest.get<ResultData<IProduct>>("/hotproduct_v2/gets");
};

// 获取所有的热门商品
export const getAllProductData = () => {
  return hyRequest.get<ResultData<IProduct>>(
    "/allProduct/gets?limit=60&offset=0"
  );
};
