import MaterialIcon from "../ui/icons/MaterialIcon";
import React from "react";

import styles from "./EmployeeListItem.module.scss";
import Employee from "../../models/employee";

type employeeListItemType = {
  name: Employee["name"];
  role: Employee["role"];
  avatar: Employee["avatar"];
};

const EmployeeListItem: React.FC<employeeListItemType> = ({
  name,
  role,
  avatar,
}) => {
  return (
    <div className={styles["employee-list-item"]}>
      <div
        className={styles.avatar}
        style={{ backgroundImage: `url(${avatar})` }}
      />
      <div className="body">
        <h2>{name}</h2>
        <p>{role}</p>
      </div>
      <MaterialIcon className={styles.icon} face="navigate_next" />
    </div>
  );
};

export default EmployeeListItem;
