import { NavLink, useRouteError } from "react-router-dom";
import classNames from "./PageNotFoundPage.module.css";
import { useTheme } from "../../store/ThemeContext";

function PageNotFoundPage() {
  const e = useRouteError();
  console.log(e);
  const darkTheme = useTheme();

  return (
    <div
      className={
        darkTheme ? classNames.errorContainer : classNames.errorContainerLight
      }
    >
      <h1 className={classNames.errorHeader}>An error occurred!</h1>
      <p className={classNames.errorMessage}>{`404 Page Not Found`}</p>
      <NavLink to="/" className={classNames.buttonToMainPage} end={true}>
        Go to main page
      </NavLink>
    </div>
  );
}

export default PageNotFoundPage;
