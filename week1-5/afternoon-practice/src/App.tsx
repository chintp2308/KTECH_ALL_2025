import styles from "./App.module.css";
import Bai1_BoDem from "./components/Bai1_BoDem/index";
import InputFieldTracker from "./components/InputFieldTracker";
import ToggleSwitch from "./components/ToggleSwitch";
import HoverHighlight from "./components/HoverHighlight";
import FormSubmissionAlert from "./components/FormSubmissionAlert";
import KeyPressDisplay from "./components/KeyPressDisplay";
import DoubleClickMessage from "./components/DoubleClickMessage";
import DropdownSelection from "./components/DropdownSelection";
import CheckboxToggle from "./components/CheckboxToggle";
import SearchFilter from "./components/SearchFilter";

function App() {
  return (
    <div>
      <div className={styles.container}>
        <h1>Exercise 1: Bộ đếm</h1>
        <Bai1_BoDem />
      </div>
      <div className={styles.container}>
        <h1>Exercise 2: Input Field Tracker</h1>
        <InputFieldTracker />
      </div>
      <div className={styles.container}>
        <h1>Exercise 3: Toggle Switch</h1>
        <ToggleSwitch />
      </div>
      <div className={styles.container}>
        <h1>Exercise 4: Hover Highlight</h1>
        <HoverHighlight />
      </div>
      <div className={styles.container}>
        <h1>Exercise 5: Form Submission Alert</h1>
        <FormSubmissionAlert />
      </div>
      <div className={styles.container}>
        <h1>Exercise 6: Key Press Display</h1>
        <KeyPressDisplay />
      </div>
      <div className={styles.container}>
        <h1>Exercise 7: Double Click Message</h1>
        <DoubleClickMessage />
      </div>
      <div className={styles.container}>
        <h1>Exercise 8: Dropdown Selection</h1>
        <DropdownSelection />
      </div>
      <div className={styles.container}>
        <h1>Exercise 9: Checkbox Toggle</h1>
        <CheckboxToggle />
      </div>
      <div className={styles.container}>
        <h1>Exercise 10: Search Filter</h1>
        <SearchFilter />
      </div>
    </div>
  );
}

export default App;
