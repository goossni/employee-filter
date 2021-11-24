import React from "react";
import styles from "./CentredContainer.module.scss";

type centredContainerType = {
  className: string;
};

const CentredContainer: React.FC<centredContainerType> = ({
  children,
  className,
}) => {
  return (
    <div className={`${styles["centred-container"]} ${className}`}>
      {children}
    </div>
  );
};

export default CentredContainer;
