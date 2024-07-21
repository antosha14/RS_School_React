import classnames from "./ToggleThemeButton.module.css";
import { useThemeUpdate } from "../../store/ThemeContext";

function ToggleThemeButton() {
  const toggleTheme = useThemeUpdate();
  return (
    <div className={classnames.toggleThemeContainer}>
      <input
        className={classnames.themeInput}
        type="checkbox"
        id="switch"
        onChange={toggleTheme}
      />
      <label className={classnames.themeLabel} htmlFor="switch">
        Toggle
      </label>
    </div>
  );
}

export default ToggleThemeButton;
