"use client";
import { useEffect } from "react";
import Link from "next/link";
import classnames from "../styles/ErrorBoundary.module.css";

export default function ErrorComponent({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const handleClick = () => {
    window.location.reload();
  };

  return (
    <div className={classnames.errorContainer}>
      <h1 className={classnames.errorHeader}>An error occurred!</h1>
      <p className={classnames.errorMessage}>{"Unknown error has happened"}</p>
      <Link
        href={"/"}
        onClick={handleClick}
        className={classnames.buttonToMainPage}
      >
        Reload the page
      </Link>
    </div>
  );
}
