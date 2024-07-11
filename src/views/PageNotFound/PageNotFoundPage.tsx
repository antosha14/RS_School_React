import { NavLink } from "react-router-dom";
import classes from "./PageNotFoundPage.module.css";

function PageNotFoundPage() {
  return (
    <div className={classes.errorContainer}>
      <h1>An error occurred!</h1>
      <p>Could not find this page!</p>
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
