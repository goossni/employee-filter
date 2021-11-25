import React from "react";

import MaterialIcon from "../ui/icons/MaterialIcon";

import styles from "./AccordeonListItem.module.scss";

type employeeListItemType = {
  title: string;
  subtitle: string;
  sideElement?: React.ReactNode;
};

const AccordeonListItem: React.FC<employeeListItemType> = ({
  title,
  subtitle,
  sideElement,
}) => {
  return (
    <div className={styles["accordeon-list-item"]}>
      {sideElement}
      <div className="body">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <MaterialIcon className={styles.icon} face="keyboard_arrow_down" />
    </div>
  );
};

export default AccordeonListItem;
