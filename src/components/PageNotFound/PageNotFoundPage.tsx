"use client";

import Link from "next/link";
import classNames from "../../styles/PageNotFoundPage.module.css";
import { useTheme } from "../../contexts/ThemeContext";

function PageNotFoundPage() {
  const darkTheme = useTheme();

  return (
    <div
      className={
        darkTheme ? classNames.errorContainer : classNames.errorContainerLight
      }
    >
      <h1 className={classNames.errorHeader}>An error occurred!</h1>
      <p className={classNames.errorMessage}>{`404 Page Not Found`}</p>
      <Link href="/" className={classNames.buttonToMainPage}>
        Go to main page
      </Link>
    </div>
  );
}

export default PageNotFoundPage;
