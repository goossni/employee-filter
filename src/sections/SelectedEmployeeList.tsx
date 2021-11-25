import AccordeonListItem from "../components/list-items/AccordeonListItem";
import GeneratedAvatar from "../components/ui/avatars/GeneratedAvatar";
import Topbar from "../components/ui/containers/Topbar";
import MaterialIcon from "../components/ui/icons/MaterialIcon";
import GeneralList from "../components/ui/lists/GeneralList";
import UI_COLORS from "../constants/ui-colors";

import styles from "./SelectedEmployeeList.module.scss";

const SelectedEmployeeList = () => {
  const avatar = (
    <GeneratedAvatar
      className={styles.avatar}
      name="Nick Goossens"
      color={UI_COLORS.RED.primaryColor}
    />
  );
  return (
    <GeneralList className={styles["selected-employee-list"]}>
      <Topbar>
        <h2>Selected Employees</h2>
      </Topbar>
      <div className={styles["list-item-container"]}>
        <MaterialIcon className={styles["close-button"]} face="close" />
        <AccordeonListItem
          title="Nick Goossens"
          subtitle="Frontend Developer"
          sideElement={avatar}
        />
      </div>
    </GeneralList>
  );
};

export default SelectedEmployeeList;
