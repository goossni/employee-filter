import CentredContainer from "./components/ui/containers/CentredContainer";
import styles from "./App.module.scss";
import MainContainer from "./components/ui/containers/MainContainer";
import EmployeeList from "./sections/EmployeeList";
import SelectedEmployeeList from "./sections/SelectedEmployeeList";
import EmployeeDetail from "./sections/EmployeeDetail";
import EmployeesContextProvider from "./store/employees-context";

function App() {
  return (
    <EmployeesContextProvider>
      <div className={styles.app}>
        <CentredContainer className={styles["centred-container"]}>
          <MainContainer>
            <EmployeeList />
            <EmployeeDetail className={styles["main-container"]} />
            <SelectedEmployeeList />
          </MainContainer>
        </CentredContainer>
      </div>
    </EmployeesContextProvider>
  );
}

export default App;
