"use client";
import React, { memo } from "react";
import { Col, Row } from "antd";
import classNames from "classnames";
import styles from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const TabCategory = memo((props) => {
  const { categorys = [] } = props;
  const router = useRouter();

  //路由跳转方式不利于SEO( 但是更加灵活 )
  function handleItemClick(item: any) {
    if (item.tabIndex === 0 || item.tabIndex === 1) {
      // IP周边 -  数码影响
      router.push(`/search?q=${item.title}`);
    } else if (item.tabIndex === 2) {
      // 热销爆品
      router.push(`/detail?id=${item.cid}&q=${item.title}`);
    } else {
      // 云倍商城
      window.open(item.targetUrl);
    }
  }

  return (
    <div className={styles["tab-category"]}>
      <div className={classNames(styles.content, "wrapper")}>
        <Row>
          {categorys?.map((item) => {
            return (
              <Col span={6} key={item.cid}>
                <div
                  className={styles["category-item"]}
                  onClick={() => handleItemClick(item)}
                >
                  <Image
                    className={styles.image}
                    src={item.picStr}
                    width={48}
                    height={48}
                    alt="zimo"
                  />
                  <div className={styles.right}>
                    <div className={styles.title}>{item.title}</div>
                    {item.type === 1 && (
                      <div className={styles["sub-title"]}>
                        <div className={styles.count}>{item.count}</div>
                        <span>{item.desc}</span>
                      </div>
                    )}
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
});

export default TabCategory;
