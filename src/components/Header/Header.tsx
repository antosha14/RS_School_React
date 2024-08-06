import classNames from "./Header.module.css";
import SearchForm from "../Form/Form";
import ToggleThemeButton from "../ToggleThemeButton/ToggleThemeButton";
import { useTheme } from "../../contexts/ThemeContext";

function Header() {
  const darkTheme = useTheme();
  return (
    <header className={darkTheme ? classNames.header : classNames.headerLight}>
      <div className={classNames.headerContainer}>
        <SearchForm />
        <ToggleThemeButton />
      </div>
    </header>
  );
}

export default Header;
