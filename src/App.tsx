import CentredContainer from "./components/ui/CentredContainer";
import styles from "./App.module.scss";
import MainContainer from "./components/ui/MainContainer.module";

function App() {
  return (
    <div className={styles.app}>
      <CentredContainer className={styles["centred-container"]}>
        <MainContainer></MainContainer>
      </CentredContainer>
    </div>
  );
}

export default App;
