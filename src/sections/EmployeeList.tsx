import GeneralList from "../components/ui/lists/GeneralList";
import React from "react";

import styles from "./EmployeeList.module.scss";
import EmployeeListItem from "../components/list-items/EmployeeListItem";
import MaterialIcon from "../components/ui/icons/MaterialIcon";
import Topbar from "../components/ui/containers/Topbar";
import Employee from "../models/employee";
import UI_COLORS from "../constants/ui-colors";

const EmployeeList: React.FC = () => {
  const employees: Employee[] = [
    new Employee("1", "Nick Goossens", "Frontend Developer", UI_COLORS.RED),
    new Employee("2", "Simon Buyssen", "Frontend Developer", UI_COLORS.ORANGE),
    new Employee("3", "John Doe", "Projectmanager", UI_COLORS.GREEN),
    new Employee("4", "Jane Doe", "Designer", UI_COLORS.BLUE),
  ];

  return (
    <GeneralList className={styles["employee-list"]}>
      <Topbar className={styles["input-holder"]}>
        <MaterialIcon className={styles.icon} face="search" />
        <input
          type="text"
          name="filter"
          id="filter"
          placeholder="Search for an employee..."
        />
      </Topbar>
      {employees.map((employee) => {
        return (
          <EmployeeListItem
            key={employee.id}
            name={employee.name}
            role={employee.role}
            color={employee.theme.primaryColor}
          />
        );
      })}
    </GeneralList>
  );
};

export default EmployeeList;
