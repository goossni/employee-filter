import React from "react";
import styles from "./MaterialIcon.module.scss";

type materialIconType = {
  face: string;
  theme?: string;
  className?: string;
};

const MaterialIcon: React.FC<materialIconType> = ({
  face,
  theme = "light",
  className,
}) => {
  console.log(styles);
  return (
    <span
      className={`material-icons ${className && className} ${
        styles["material-icons"]
      } ${styles[theme]}`}
    >
      {face}
    </span>
  );
};

export default MaterialIcon;
