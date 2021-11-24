import CentredContainer from "./components/ui/containers/CentredContainer";
import styles from "./App.module.scss";
import MainContainer from "./components/ui/containers/MainContainer";
import EmployeeList from "./sections/EmployeeList";

function App() {
  return (
    <div className={styles.app}>
      <CentredContainer className={styles["centred-container"]}>
        <MainContainer>
          <EmployeeList />
        </MainContainer>
      </CentredContainer>
    </div>
  );
}

export default App;
