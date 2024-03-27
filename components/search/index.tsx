"use client";
import React, { memo, useState } from "react";
import classNames from "classnames";
import styles from "./index.module.scss";
import type { KeyboardEvent } from "react";
import { useRouter } from "next/navigation";

const Search = memo((props) => {
  const router = useRouter();
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
    setPlaceholder(val);
    // 跳转到搜索页面
    router.push(`/search/?q=${val}`);
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
          {searchData?.configKey?.map((item, index) => (
            <li
              onMouseDown={() => handleItemClick(item[index + 1])}
              key={item[index + 1]}
            >
              {item[index + 1]}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});

export default Search;
