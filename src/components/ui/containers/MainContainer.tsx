import React from "react";
import styles from "./MainContainer.module.scss";

const MainContainer: React.FC = ({ children }) => {
  return <main className={styles["main-container"]}>{children}</main>;
};

export default MainContainer;
