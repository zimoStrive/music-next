import React, { memo } from "react";
import Link from "next/link";
import classNames from "classnames";
import styles from "./index.module.scss";
import Search from "../search";

const NavBar = memo(() => {
  return (
    <div className={styles.navbar}>
      <div className={classNames("wrapper", styles.content)}>
        <div className={styles["content-left"]}>
          <Link href="/" className={styles.logo}></Link>
          <h1 className={styles.title}>网易云音乐</h1>
        </div>
        <div className={styles["content-right"]}>
          <Search />

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
