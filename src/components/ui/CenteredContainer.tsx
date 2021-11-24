import React from "react";
import styles from "./CenteredContainer.module.scss";

type centeredContainerType = {
  className: string;
};

const CenteredContainer: React.FC<centeredContainerType> = ({
  children,
  className,
}) => {
  return (
    <div className={`${styles["centered-container"]} ${className}`}>
      {children}
    </div>
  );
};

export default CenteredContainer;
