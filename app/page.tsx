"use client";
import React, { memo, useEffect } from "react";
import { fetchHomeInfoDataAction } from "@/store/modules/home";
import { useDispatch } from "react-redux";
import { shallowEqual, useSelector } from "react-redux";
import classNames from "classnames";
import styles from "./index.module.scss";

import TopSwiper from "@/components/topSwiper";
import TabCategory from "@/components/tab-category";
import Recommend from "@/components/Recommend";
import SectionTitle from "@/components/section-title";
import GridView from "@/components/grid-view";
import DigitalPanel from "@/components/digital-panel";

const Home = memo(() => {
  // 获取数据
  const {
    banners,
    categorys,
    recommends,
    hotProduct,
    digitalData,
    allProducts,
  } = useSelector(
    (state: any) => ({
      banners: state.home.homeInfo.banners,
      categorys: state.home.homeInfo.categorys,
      recommends: state.home.homeInfo.recommends,
      hotProduct: state.home.hotProductData.hotProduct,
      digitalData: state.home.homeInfo.digitalData,
      allProducts: state.home.allProduct.allProduct,
    }),
    shallowEqual
  );

  // 派发数据
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeInfoDataAction());
  }, [dispatch]);
  return (
    <div className="home">
      <TopSwiper banners={banners} />
      <TabCategory categorys={categorys} />
      <Recommend recommends={recommends} />

      <div className={classNames("wrapper", styles.content)}>
        <SectionTitle title="编辑推荐" />
        <GridView products={hotProduct} />
        <DigitalPanel itemData={digitalData}></DigitalPanel>
        <SectionTitle title="热门商品"></SectionTitle>
        <GridView products={allProducts}></GridView>
      </div>
    </div>
  );
});

export default Home;
