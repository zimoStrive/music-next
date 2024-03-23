import classNames from "classnames";
import styles from "./index.module.scss";

interface IProps {
  title?: string;
}

const SectionTitle = (props: IProps) => {
  const { title = "" } = props;
  return <div className={styles["section-title"]}>{title}</div>;
};

export default SectionTitle;
