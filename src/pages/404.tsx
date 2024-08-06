import Link from "next/link";
import classNames from "../styles/PageNotFoundPage.module.css";
import { useTheme } from "../contexts/ThemeContext";

export default function PageNotFoundPage() {
  console.error("404, Page not found");
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
