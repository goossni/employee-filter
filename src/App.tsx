import CentredContainer from "./components/ui/containers/CentredContainer";
import styles from "./App.module.scss";
import MainContainer from "./components/ui/containers/MainContainer";
import EmployeeList from "./sections/EmployeeList";
import SelectedEmployeeList from "./sections/SelectedEmployeeList";
import EmployeeDetail from "./sections/EmployeeDetail";

function App() {
  return (
    <div className={styles.app}>
      <CentredContainer className={styles["centred-container"]}>
        <MainContainer>
          <EmployeeList />
          <EmployeeDetail className={styles["main-container"]} />
          <SelectedEmployeeList />
        </MainContainer>
      </CentredContainer>
    </div>
  );
}

export default App;
