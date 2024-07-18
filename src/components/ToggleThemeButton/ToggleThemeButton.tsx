import classnames from "./ToggleThemeButton.module.css";
import { useThemeUpdate } from "../../store/ThemeContext";

function ToggleThemeButton() {
  const toggleTheme = useThemeUpdate();
  return (
    <div className={classnames.toggleThemeContainer}>
      <input type="checkbox" id="switch" onChange={toggleTheme} />
      <label htmlFor="switch">Toggle</label>
    </div>
  );
}

export default ToggleThemeButton;
