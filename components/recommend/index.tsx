import React, { memo } from "react";
import styles from "./index.module.scss";
import classNames from "classnames";
import { Col, Row } from "antd";
import Link from "next/link";
import Image from "next/image";

const Recommend = memo((props) => {
  const { recommends = [] } = props;
  return (
    <div className={styles.recommend}>
      <div className={classNames("wrapper", styles.content)}>
        <Row>
          {recommends.map((item) => {
            return (
              <Col span={12} key={item.id}>
                <Link href={`detail/${item.id}`}>
                  <div className={"recommend-item"}>
                    {/* priority 开启预加载*/}
                    <Image
                      className={styles.image}
                      src={item.picStr}
                      priority
                      width={542}
                      height={300}
                      alt="zimo"
                    ></Image>
                  </div>
                </Link>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
});

export default Recommend;
