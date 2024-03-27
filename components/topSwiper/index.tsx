"use client";
import React, { memo, useRef, useState } from "react";
import styles from "./index.module.scss";
import classNames from "classnames";
import Image from "next/image";
import { Carousel } from "antd";

const TopSwiper = memo((props) => {
  const { banners = [] } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null);

  const bannerChange = (index: number) => {
    setCurrentIndex(index);
  };
  function handlePrevClick() {
    bannerRef.current?.prev();
  }
  function handleNextClick() {
    bannerRef.current?.next();
  }

  return (
    <div className={styles["top-swiper"]}>
      <div className={classNames(styles.content, "wrapper")}>
        <Carousel
          ref={bannerRef}
          autoplay
          dots={false}
          className={styles.carousel}
          effect="fade"
          afterChange={bannerChange}
        >
          {banners.map((item) => {
            return (
              <div className={styles["swiper-item"]} key={item.id}>
                <div
                  className={styles["swiper-bg"]}
                  style={{ backgroundImage: `url(${item.backendPicStr})` }}
                ></div>
                <Image
                  className={styles.image}
                  src={item.picStr}
                  alt="music"
                  priority
                  width={1100}
                  height={480}
                />
              </div>
            );
          })}
        </Carousel>

        {/* 定位-分页器 */}
        <ul className={styles.dots}>
          {banners.map((item, index) => {
            return (
              <li
                key={item.id}
                className={classNames(styles["dot"], {
                  [styles.active]: index === currentIndex,
                })}
              ></li>
            );
          })}
        </ul>
      </div>

      {/* 定位：上一页和下一页 */}
      <button className={styles.prev} onClick={handlePrevClick}>
        <span></span>
      </button>
      <button className={styles.next} onClick={handleNextClick}>
        <span></span>
      </button>
    </div>
  );
});

export default TopSwiper;
