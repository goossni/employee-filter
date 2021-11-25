import { useContext } from "react";
import AccordeonListItem from "../components/list-items/AccordeonListItem";
import GeneratedAvatar from "../components/ui/avatars/GeneratedAvatar";
import Topbar from "../components/ui/containers/Topbar";
import MaterialIcon from "../components/ui/icons/MaterialIcon";
import GeneralList from "../components/ui/lists/GeneralList";
import { EmployeesContext } from "../store/employees-context";

import styles from "./SelectedEmployeeList.module.scss";

const SelectedEmployeeList = () => {
  const { selectedEmployees, removeEmployee } = useContext(EmployeesContext);

  let employeeListContent = <></>;

  if (selectedEmployees.length !== 0) {
    employeeListContent = (
      <GeneralList className={styles["selected-employee-list"]}>
        <Topbar>
          <h2>Selected Employees</h2>
        </Topbar>
        {selectedEmployees.map((employee) => {
          const avatar = (
            <GeneratedAvatar
              className={styles.avatar}
              name={employee.name}
              color={employee.theme.primaryColor}
            />
          );

          return (
            <div key={employee.id} className={styles["list-item-container"]}>
              <MaterialIcon
                className={styles["close-button"]}
                face="close"
                onClick={() => removeEmployee(employee.id)}
              />
              <AccordeonListItem
                title={employee.name}
                subtitle={employee.role}
                sideElement={avatar}
              />
            </div>
          );
        })}
      </GeneralList>
    );
  }

  return employeeListContent;
};

export default SelectedEmployeeList;
