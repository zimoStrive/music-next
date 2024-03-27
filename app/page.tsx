import React, { memo, useEffect } from "react";
import { fetchHomeInfoDataAction } from "@/store/modules/home";
import { useDispatch } from "react-redux";
import { shallowEqual, useSelector } from "react-redux";
import classNames from "classnames";
import styles from "./index.module.scss";
import {
  fetchAllProductData,
  fetchHomeInfoData,
  fetchHotProductV2Data,
} from "@/service/home";

import TopSwiper from "@/components/topSwiper";
import TabCategory from "@/components/tab-category";
import Recommend from "@/components/Recommend";
import SectionTitle from "@/components/section-title";
import GridView from "@/components/grid-view";
import DigitalPanel from "@/components/digital-panel";

/* 并行获取数据 */
async function getHomeInfoData() {
  const res = await fetch(fetchHomeInfoData());
  return res.json();
}
async function getAllProductData() {
  const res = await fetch(fetchAllProductData());
  return res.json();
}
async function getHotProductV2Data() {
  const res = await fetch(fetchHotProductV2Data());
  return res.json();
}

const Home = memo(async () => {
  const [homeInfoData, allProductData, productV2Data] = await Promise.all([
    getHomeInfoData(),
    getAllProductData(),
    getHotProductV2Data(),
  ]);
  const { banners, categorys, recommends, digitalData } = homeInfoData.data;
  const { allProduct } = allProductData.data;
  const { hotProduct } = productV2Data.data;
  return (
    <div className="home">
      <TopSwiper banners={banners} />
      {<TabCategory categorys={categorys} />}
      <Recommend recommends={recommends} />

      <div className={classNames("wrapper", styles.content)}>
        <SectionTitle title="编辑推荐" />
        <GridView products={hotProduct} />
        <DigitalPanel itemData={digitalData}></DigitalPanel>
        <SectionTitle title="热门商品"></SectionTitle>
        <GridView products={allProduct}></GridView>
      </div>
    </div>
  );
});

export default Home;
