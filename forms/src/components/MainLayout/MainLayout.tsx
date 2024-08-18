import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

export function MainLayout() {
  return (
    <>
      <header className="h-20 bg-zinc-900 flex items-center sticky">
        <NavLink
          to={"/"}
          className={({ isActive }) => {
            const navStyle = `text-xl font-semibold text-red-500 m-5`;
            return isActive ? navStyle + " underline" : navStyle;
          }}
          end
        >
          Main Page
        </NavLink>
        <NavLink
          to={"/controlled"}
          className={({ isActive }) => {
            const navStyle = `text-xl font-semibold text-red-500 m-5`;
            return isActive ? navStyle + " underline" : navStyle;
          }}
          end
        >
          Controlled Form
        </NavLink>
        <NavLink
          to={"/uncontrolled"}
          className={({ isActive }) => {
            const navStyle = `text-xl font-semibold text-red-500 m-5`;
            return isActive ? navStyle + " underline" : navStyle;
          }}
          end
        >
          Uncontrolled Form
        </NavLink>
      </header>
      <main className="bg-zinc-800 flex-1 flex-col content-start h-content">
        <Outlet />
      </main>
    </>
  );
}
