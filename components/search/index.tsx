"use client";

import React, { memo, useState } from "react";
import classNames from "classnames";
import styles from "./index.module.scss";
import type { KeyboardEvent } from "react";

const Search = memo((props) => {
  const { searchData } = props;
  const [inputFocus, setInputFocus] = useState<boolean>(false);
  const [placeholder, setPlaceholder] = useState(
    searchData?.defaultKey || "蓝牙耳机"
  );

  const handleInputFoucs = (isFocus: boolean) => {
    setInputFocus(isFocus);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      const val = e.target.value;
      handleItemClick(val);
      setInputFocus(false);
      console.log("enter");
    }
  };

  const handleItemClick = (val: string) => {
    console.log(val);
  };
  return (
    <div className={styles["search"]}>
      <div className={styles["search-bg"]}>
        <input
          className={styles.input}
          type="text"
          onFocus={() => handleInputFoucs(true)}
          onBlur={() => handleInputFoucs(false)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
        />
      </div>

      <div
        className={classNames(
          styles["search-panel"],
          inputFocus && styles.show
        )}
      >
        <div className={styles.shadow}></div>
        <h2>热门搜索</h2>
        <ul>
          <li>123</li>
          <li>123</li>
          <li>12</li>
          <li>1</li>
          <li>123</li>
        </ul>
      </div>
    </div>
  );
});

export default Search;
