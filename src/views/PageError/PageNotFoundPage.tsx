import { NavLink, useRouteError } from "react-router-dom";
import classes from "./PageNotFoundPage.module.css";

function PageNotFoundPage() {
  const e = useRouteError();
  console.log(e);
  return (
    <div className={classes.errorContainer}>
      <h1>An error occurred!</h1>
      <p>{`404 Page Not Found`}</p>
      <NavLink
        to="/"
        className={(isActive) => (isActive ? "a" : "b")}
        end={true}
      >
        Go to main page
      </NavLink>
    </div>
  );
}

export default PageNotFoundPage;
