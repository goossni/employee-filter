import Topbar from "../components/ui/containers/Topbar";
import GeneralList from "../components/ui/lists/GeneralList";

import styles from "./SelectedEmployeeList.module.scss";

const SelectedEmployeeList = () => {
  return (
    <GeneralList className={styles["selected-employee-list"]}>
      <Topbar>
        <h2>Selected Employees</h2>
      </Topbar>
    </GeneralList>
  );
};

export default SelectedEmployeeList;
