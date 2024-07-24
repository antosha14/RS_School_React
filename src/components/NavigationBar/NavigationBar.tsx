import classnames from "./NavigationBar.module.css";
import { NavLink } from "react-router-dom";
import { JSX } from "react";
import { useSearchParams } from "react-router-dom";

function NavigationBar({ depth }: { depth: number }) {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;
  const query = searchParams.get("query")
    ? String(searchParams.get("query"))
    : "";
  const navList: JSX.Element[] = [];
  for (let i = 1; i <= depth; i++) {
    navList.push(
      <NavLink
        to={`/?query=${query}&page=${i}`}
        className={page == i ? classnames.active : ""}
        key={i}
        end
      >
        {i}
      </NavLink>,
    );
  }

  return (
    <nav className={classnames.navigationContainer}>
      {page == 1 ? (
        <NavLink to={`/?query=${query}&page=${page}`} end>
          {"<<"}
        </NavLink>
      ) : (
        <NavLink to={`/?query=${query}&page=${page - 1}`} end>
          {"<<"}
        </NavLink>
      )}

      {navList}
      {page == depth ? (
        ""
      ) : (
        <NavLink to={`/?query=${query}&page=${page + 1}`}>{">>"}</NavLink>
      )}
    </nav>
  );
}

export default NavigationBar;
