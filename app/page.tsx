"use client";
import React, { memo, useEffect } from "react";
import { fetchHomeInfoDataAction } from "@/store/modules/home";
import { useDispatch } from "react-redux";

const Home = memo(() => {
  // 派发数据
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeInfoDataAction());
  }, [dispatch]);
  return <div>Home </div>;
});

export default Home;
