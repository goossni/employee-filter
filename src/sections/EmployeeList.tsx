import GeneralList from "../components/ui/lists/GeneralList";
import React, { useContext, useState } from "react";

import styles from "./EmployeeList.module.scss";
import EmployeeListItem from "../components/list-items/EmployeeListItem";
import MaterialIcon from "../components/ui/icons/MaterialIcon";
import Topbar from "../components/ui/containers/Topbar";

import { EmployeesContext } from "../store/employees-context";

const EmployeeList: React.FC = () => {
  const employeeContext = useContext(EmployeesContext);
  const { employees, setActiveId } = employeeContext;

  const [filter, setFilter] = useState("");

  const inputHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setFilter(e.currentTarget.value);
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <GeneralList className={styles["employee-list"]}>
      <Topbar className={styles["input-holder"]}>
        <MaterialIcon className={styles.icon} face="search" />
        <input
          type="text"
          name="filter"
          id="filter"
          placeholder="Search for an employee..."
          value={filter}
          onChange={inputHandler}
        />
      </Topbar>
      {filteredEmployees.length === 0 ? (
        <p className={styles["fallback-message"]}>No employees found.</p>
      ) : (
        filteredEmployees.map((employee) => {
          return (
            <EmployeeListItem
              key={employee.id}
              name={employee.name}
              role={employee.role}
              color={employee.theme.primaryColor}
              onClick={() => setActiveId(employee.id)}
            />
          );
        })
      )}
    </GeneralList>
  );
};

export default EmployeeList;
