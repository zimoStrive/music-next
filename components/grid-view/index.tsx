"use client";
import React, { memo } from "react";
import GridViewItem from "@/components/grid-view-item";
import { Row, Col } from "antd";
import styles from "./index.module.scss";
import { useRouter } from "next/navigation";

const GridView = memo((props) => {
  const { products = [] } = props;
  const router = useRouter();

  function handleItemClick(product) {
    router.push(`/good-detail/?id=${product.id}&q=${product.name}`);
  }
  return (
    <div className={styles["grid-view"]}>
      <Row>
        {products.map((item, index) => {
          return (
            <Col span={6} key={item.id}>
              <div className={styles["view-item"]}>
                <GridViewItem
                  onItemClick={handleItemClick}
                  showTip={index === 0}
                  product={item}
                />
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
});

export default GridView;
