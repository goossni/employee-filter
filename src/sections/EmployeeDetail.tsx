import React from "react";
import GeneratedAvatar from "../components/ui/avatars/GeneratedAvatar";
import Employee from "../models/employee";

import styles from "./EmployeeDetail.module.scss";

type employeeDetailType = {
  className?: string;
  name: Employee["name"];
  role: Employee["role"];
  theme: Employee["theme"];
};

const EmployeeDetail: React.FC<employeeDetailType> = ({
  className,
  name,
  role,
  theme,
}) => {
  return (
    <section
      className={`${styles["employee-detail"]} ${className && className}`}
    >
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
      <div className="body">
        <div className={styles["text-holder"]}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            elementum turpis quis tellus malesuada tempus. Donec eu congue
            ipsum, ut vehicula lectus. Integer ultricies tellus eu mauris
            fermentum, at luctus elit luctus. Nam sed eleifend arcu. Donec a
            dolor vel erat sagittis facilisis quis at mauris. Donec vitae justo
            suscipit, tristique neque ullamcorper, laoreet sem. Integer
            efficitur nibh leo, non pellentesque enim pellentesque a. Integer
            lacinia diam at egestas laoreet. Suspendisse id hendrerit metus.
            Nulla in enim velit. Etiam at neque eleifend, feugiat quam a,
            laoreet massa. Nulla ac molestie sapien, sit amet laoreet tellus.
            Nullam tincidunt pharetra nulla, et pulvinar lacus tempus eget.
            Donec quis dignissim felis. Nulla sed congue dui, id dignissim
            sapien.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmployeeDetail;
