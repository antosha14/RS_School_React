import { NavLink, useRouteError } from "react-router-dom";
import classNames from "./PageNotFoundPage.module.css";

function PageNotFoundPage() {
  const e = useRouteError();
  console.log(e);
  return (
    <div className={classNames.errorContainer}>
      <h1 className={classNames.errorHeader}>An error occurred!</h1>
      <p className={classNames.errorMessage}>{`404 Page Not Found`}</p>
      <NavLink to="/" className={classNames.buttonToMainPage} end={true}>
        Go to main page
      </NavLink>
    </div>
  );
}

export default PageNotFoundPage;
