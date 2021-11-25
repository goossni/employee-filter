import React, { useContext } from "react";
import GeneratedAvatar from "../components/ui/avatars/GeneratedAvatar";
import Button from "../components/ui/buttons/Button";
import MaterialIcon from "../components/ui/icons/MaterialIcon";
import { EmployeesContext } from "../store/employees-context";

import styles from "./EmployeeDetail.module.scss";

type employeeDetailType = {
  className?: string;
};

const EmployeeDetail: React.FC<employeeDetailType> = ({ className }) => {
  const employeeContext = useContext(EmployeesContext);
  let detailContent = (
    <div className={styles["fallback-message"]}>
      <MaterialIcon
        className={styles["fallback-message-icon"]}
        face="person_search"
      />
      <h1>Please choose an employee.</h1>
    </div>
  );

  if (employeeContext.activeEmployee) {
    const employee = employeeContext.activeEmployee;
    const { theme, name, role, description, skills } = employee;
    detailContent = (
      <>
        <header
          style={{
            background: `linear-gradient(120deg, #${theme.primaryColor}, #${theme.secondaryColor})`,
          }}
        >
          <GeneratedAvatar
            className={styles.avatar}
            name={name}
            color="1e1e1e"
            textColor="fff"
          />
          <div className="title-holder">
            <h1>{name}</h1>
            <h2>{role}</h2>
          </div>
        </header>
        <div className={styles.body}>
          <div className={styles["text-holder"]}>
            <h2>Description</h2>
            <p>{description}</p>
          </div>
          <div className={styles["skills-holder"]}>
            {skills.map((skill, index) => (
              <div key={index} className={styles["skills-container"]}>
                <h2>{skill.title}</h2>
                <ul>
                  {skill.values.map((value, index) => (
                    <li key={index}>{value}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className={styles["button-holder"]}>
            <Button onClick={() => employeeContext.selectEmployee(employee)}>
              Add Employee
            </Button>
          </div>
        </div>
      </>
    );
  }

  return (
    <section
      className={`${styles["employee-detail"]} ${className && className}`}
    >
      {detailContent}
    </section>
  );
};

export default EmployeeDetail;
