import classnames from "./ToggleThemeButton.module.css";
import { useTheme, useThemeUpdate } from "../../contexts/ThemeContext";

function ToggleThemeButton() {
  const toggleTheme = useThemeUpdate();
  const theme = useTheme();
  return (
    <div className={classnames.toggleThemeContainer}>
      <input
        className={classnames.themeInput}
        type="checkbox"
        id="switch"
        onChange={toggleTheme}
        checked={!theme}
      />
      <label className={classnames.themeLabel} htmlFor="switch">
        Toggle
      </label>
    </div>
  );
}

export default ToggleThemeButton;
