"use client";
import React, { memo, useEffect, useState } from "react";
import Link from "next/link";
import classNames from "classnames";
import styles from "./index.module.scss";
import Search from "../search";
import { shallowEqual, useSelector } from "react-redux";

const NavBar = memo(() => {
  // 获取Redux数据
  const { navbar } = useSelector(
    (state) => ({
      navbar: state.home.navbar,
    }),
    shallowEqual
  );

  const [newNavBar, setNewNavBar] = useState(navbar);
  useEffect(() => {
    if (navbar?.configKey && navbar?.configKey.length) {
      localStorage.setItem("navbar", JSON.stringify(navbar));
    } else {
      const localNavbar = localStorage.getItem("navbar") || "{}";
      setNewNavBar(JSON.parse(localNavbar));
    }
  }, []);

  return (
    <div className={styles.navbar}>
      <div className={classNames("wrapper", styles.content)}>
        <div className={styles["content-left"]}>
          <Link href="/" className={styles.logo}></Link>
          <h1 className={styles.title}>网易云音乐</h1>
        </div>
        <div className={styles["content-right"]}>
          <Search searchData={newNavBar} />

          <div className={styles["right-cart"]}>
            <a href="#" className={styles.cart}>
              <span className={styles.count}>0</span>
            </a>
          </div>
          <div className={styles["right-login"]}>登录</div>
        </div>
      </div>
    </div>
  );
});

export default NavBar;
