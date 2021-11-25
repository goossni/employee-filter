import MaterialIcon from "../ui/icons/MaterialIcon";
import React from "react";

import styles from "./EmployeeListItem.module.scss";
import Employee from "../../models/employee";
import GeneratedAvatar from "../ui/avatars/GeneratedAvatar";

type employeeListItemType = {
  name: Employee["name"];
  role: Employee["role"];
  color: Employee["theme"]["primaryColor"];
  onClick: () => void;
};

const EmployeeListItem: React.FC<employeeListItemType> = ({
  name,
  role,
  color,
  onClick,
}) => {
  return (
    <div className={styles["employee-list-item"]} onClick={onClick}>
      <GeneratedAvatar className={styles.avatar} name={name} color={color} />
      <div className="body">
        <h2>{name}</h2>
        <p>{role}</p>
      </div>
      <MaterialIcon className={styles.icon} face="navigate_next" />
    </div>
  );
};

export default EmployeeListItem;
