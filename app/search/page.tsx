"use client";
import React, { memo, useState, useEffect } from "react";
import styles from "./index.module.scss";
import classNames from "classnames";
import GridView from "@/components/grid-view";
import { useSearchParams } from "next/navigation";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchSearchProductsDataAction } from "@/store/modules/search";

const Search = memo(() => {
  // 获取query参数
  const searchParams = useSearchParams();
  const q = searchParams.get("q");
  const dispatch = useDispatch();
  // 获取数据
  const { products = [] } = useSelector(
    (state: any) => ({
      products: state.search.searchProducts.products,
    }),
    shallowEqual
  );

  useEffect(() => {
    if (typeof q === "string") {
      dispatch(fetchSearchProductsDataAction({ limit: 60, offset: 0, key: q }));
    }
  }, [q]);

  return (
    <div className={styles.search}>
      <div>{`q: ${q}`}</div>
      <div>返回数据：{JSON.stringify(products)}</div>
      <div className={classNames("wrapper")}>
        <GridView products={products}></GridView>
      </div>
    </div>
  );
});

export default Search;
