import React from "react";

import styles from "./Topbar.module.scss";

type topbarType = {
  className?: string;
};

const Topbar: React.FC<topbarType> = ({ children, className }) => {
  return <div className={`${styles.topbar} ${className}`}>{children}</div>;
};

export default Topbar;
