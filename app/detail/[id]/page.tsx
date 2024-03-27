import React, { memo } from "react";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { fetchProductDetailData } from "@/service/detail";
import styles from "./index.module.scss";
import GridView from "@/components/grid-view";

async function getDetailData(id) {
  const res = await fetch(fetchProductDetailData(id));
  return res.json();
}

const Detail = memo(async ({ params }) => {
  // 派发数据
  const res = await getDetailData(params.id);
  let detailData = res.data;

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
