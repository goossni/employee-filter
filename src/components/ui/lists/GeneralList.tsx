import React from "react";
import styles from "./GeneralList.module.scss";

type generalListType = {
  className?: string;
};

const GeneralList: React.FC<generalListType> = ({ children, className }) => {
  return (
    <section className={`${styles["general-list"]} ${className && className}`}>
      {children}
    </section>
  );
};

export default GeneralList;
