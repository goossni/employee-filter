import React, { useState } from "react";

import MaterialIcon from "../ui/icons/MaterialIcon";

import styles from "./AccordeonListItem.module.scss";

type employeeListItemType = {
  title: string;
  subtitle: string;
  sideElement?: React.ReactNode;
  toggleElement?: React.ReactNode;
};

const AccordeonListItem: React.FC<employeeListItemType> = ({
  title,
  subtitle,
  sideElement,
  toggleElement,
}) => {
  const [isToggled, setIsToggled] = useState(false);
  const toggleHandler = () => {
    setIsToggled((prevToggle) => !prevToggle);
  };
  return (
    <div
      className={`${styles["accordeon-list-item"]} ${
        isToggled && styles["is-toggled"]
      }`}
      onClick={toggleHandler}
    >
      <div className={styles.body}>
        {sideElement}
        <div className="text-container">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        <MaterialIcon className={styles.icon} face="keyboard_arrow_down" />
      </div>
      <div className={styles["toggle-container"]}>{toggleElement}</div>
    </div>
  );
};

export default AccordeonListItem;
