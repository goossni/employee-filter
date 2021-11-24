import CentredContainer from "./components/ui/containers/CentredContainer";
import styles from "./App.module.scss";
import MainContainer from "./components/ui/containers/MainContainer";
import EmployeeList from "./sections/EmployeeList";
import SelectedEmployeeList from "./sections/SelectedEmployeeList";
import EmployeeDetail from "./sections/EmployeeDetail";
import UI_COLORS from "./constants/ui-colors";

function App() {
  return (
    <div className={styles.app}>
      <CentredContainer className={styles["centred-container"]}>
        <MainContainer>
          <EmployeeList />
          <EmployeeDetail
            className={styles["main-container"]}
            name="Nick Goossens"
            role="Frontend Developer"
            theme={UI_COLORS.GREEN}
          />
          <SelectedEmployeeList />
        </MainContainer>
      </CentredContainer>
    </div>
  );
}

export default App;
