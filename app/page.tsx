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

const Home = memo(() => {
  // 获取数据
  const { banners, categorys, recommends } = useSelector(
    (state: any) => ({
      banners: state.home.banners,
      categorys: state.home.categorys,
      recommends: state.home.recommends,
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
      </div>
    </div>
  );
});

export default Home;
