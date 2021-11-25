import React from "react";
import styles from "./MaterialIcon.module.scss";

type materialIconType = {
  face: string;
  theme?: string;
  className?: string;
  onClick?: () => void;
};

const MaterialIcon: React.FC<materialIconType> = ({
  face,
  theme = "light",
  className,
  onClick,
}) => {
  return (
    <span
      className={`material-icons ${className && className} ${
        styles["material-icons"]
      } ${styles[theme]}`}
      onClick={onClick}
    >
      {face}
    </span>
  );
};

export default MaterialIcon;
