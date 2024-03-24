import httpRequest from "./index";

export interface ISearchProductResult {
  code: number;
  more: boolean;
  products?: any[];
}

export interface ISearchParam {
  limit: number;
  offset: number;
  key: string;
}

// 获取搜索数据
export const getProductSearchData = (params: ISearchParam) => {
  return httpRequest.post<ISearchProductResult>(
    `/store/api/product/search`,
    params,
    {
      "Content-Type": "application/x-www-form-urlencoded",
    }
  );
};
