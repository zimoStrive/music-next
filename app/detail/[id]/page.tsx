"use client";
import React, { memo, useEffect } from "react";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { fetchDetailProductsDataAction } from "@/store/modules/detail";
import styles from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import GridView from "@/components/grid-view";

const Detail = memo(({ params }) => {
  // 派发数据
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDetailProductsDataAction(params.id));
  }, [dispatch]);

  // 获取数据
  const detailData = useSelector((state) => state.detail.detailProducts);

  return (
    <div className={styles.detail}>
      {`params.id: ${params.id}`}
      <div className={classNames("wrapper", styles["content"])}>
        <div className={styles.banner}>
          <Link href={"/"}>
            <Image src={detailData.webPic} alt="next" priority fill></Image>
          </Link>
        </div>

        <GridView products={detailData?.products}></GridView>
      </div>
    </div>
  );
});

export default Detail;
