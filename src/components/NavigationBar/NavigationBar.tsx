import classnames from "./NavigationBar.module.css";
import Link from "next/link";
import { JSX } from "react";
import useQueryParams from "../../hooks/useQueryParams";

function NavigationBar({ depth }: { depth: number }) {
  const { currentQuery, currentPage } = useQueryParams();
  const page = currentPage;
  const query = currentQuery;

  const navList: JSX.Element[] = [];
  for (let i = 1; i <= depth; i++) {
    navList.push(
      <Link
        href={`/?query=${query}&page=${i}`}
        className={page == i ? classnames.active : ""}
        key={i}
      >
        {i}
      </Link>,
    );
  }

  return (
    <nav className={classnames.navigationContainer}>
      {page == 1 ? (
        <Link href={`/?query=${query}&page=${page}`}>{"<<"}</Link>
      ) : (
        <Link href={`/?query=${query}&page=${page - 1}`}>{"<<"}</Link>
      )}

      {navList.slice(Math.max(0, page - 4), Math.min(depth, page + 4))}
      {page == depth ? (
        ""
      ) : (
        <Link href={`/?query=${query}&page=${page + 1}`}>{">>"}</Link>
      )}
    </nav>
  );
}

export default NavigationBar;
