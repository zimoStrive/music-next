"use client";
import React, { memo, useEffect } from "react";
import { fetchHomeInfoDataAction } from "@/store/modules/home";
import { useDispatch } from "react-redux";
import TopSwiper from "@/components/topSwiper";
import { shallowEqual, useSelector } from "react-redux";

const Home = memo(() => {
  // 获取数据
  const { banners } = useSelector(
    (state: any) => ({
      banners: state.home.banners,
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
    </div>
  );
});

export default Home;
