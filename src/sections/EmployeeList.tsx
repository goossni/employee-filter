import GeneralList from "../components/ui/lists/GeneralList";
import React from "react";

import styles from "./EmployeeList.module.scss";
import EmployeeListItem from "../components/list-items/EmployeeListItem";
import MaterialIcon from "../components/ui/icons/MaterialIcon";

const EmployeeList: React.FC = () => {
  return (
    <GeneralList className={styles["employee-list"]}>
      <div className={styles["input-holder"]}>
        <MaterialIcon className={styles.icon} face="search" />
        <input
          type="text"
          name="filter"
          id="filter"
          placeholder="Search for an employee..."
        />
      </div>
      <EmployeeListItem
        name="Nick Goossens"
        role="Frontend Developer"
        avatar="https://eu.ui-avatars.com/api/?name=Nick+Goossens&amp;background=random"
      />
      <EmployeeListItem
        name="Simon Buyssen"
        role="Frontend Developer"
        avatar="https://eu.ui-avatars.com/api/?name=Simon+Buyssen&amp;background=random"
      />
    </GeneralList>
  );
};

export default EmployeeList;