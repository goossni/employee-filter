import CenteredContainer from "./components/ui/CenteredContainer";
import styles from "./App.module.scss";
import MainContainer from "./components/ui/MainContainer.module";

function App() {
  return (
    <div className={styles.app}>
      <CenteredContainer className={styles["centered-container"]}>
        <MainContainer></MainContainer>
      </CenteredContainer>
    </div>
  );
}

export default App;
