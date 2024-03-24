import React, { memo } from "react";
import styles from "./index.module.scss";
import Image from "next/Image";
import Link from "next/Link";

interface IProps {
  product?: any;
  showTip?: boolean;
  onItemClick?: (product: any) => void;
}

const GridViewItem = memo((props: IProps) => {
  const { product, showTip = false, onItemClick } = props;
  const products = product.products ? product.products : product;

  function handleItemClick() {
    onItemClick && onItemClick(product);
  }

  return (
    <div className={styles["grid-view-item"]} onClick={handleItemClick}>
      <div className={styles["item-image"]}>
        <Image
          className={styles.image}
          src={products.coverUrl}
          alt="zimo"
          width="263"
          height="263"
        ></Image>
        {showTip && (
          <div className={styles.tip}>
            <div>¥{products.minPrice}</div>
            <div className={styles["original-cost"]}>
              ¥{products.originalCost}
            </div>
          </div>
        )}
      </div>
      <div className={styles["item-info"]}>
        {/* label */}
        {products.couponLabelDesc && (
          <span className={styles.label}>{products.couponLabelDesc}</span>
        )}
        {/* Link */}
        <Link href={`/good-detail?id${products.id}`} className={styles.name}>
          {products.name}
        </Link>
      </div>
      <div className={styles["item-price"]}>¥{products.minPrice}</div>
    </div>
  );
});

export default GridViewItem;
