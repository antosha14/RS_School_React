import { createContext, ReactElement, useContext, useState } from "react";

const ThemeContext = createContext(
  localStorage.getItem("darkTheme")
    ? Boolean(localStorage.getItem("darkTheme"))
    : true,
);
const ThemeUpdateContext = createContext(() => {});

const useTheme = () => {
  return useContext(ThemeContext);
};

const useThemeUpdate = () => {
  return useContext(ThemeUpdateContext);
};

const ThemeProvider = ({ children }: { children: ReactElement }) => {
  const [darkTheme, setDarkTheme] = useState(
    localStorage.getItem("darkTheme")
      ? Boolean(localStorage.getItem("darkTheme"))
      : true,
  );

  function toggleTheme() {
    setDarkTheme((prevTheme) => {
      localStorage.setItem("darkTheme", `${!prevTheme}`);
      return !prevTheme;
    });
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, useTheme, useThemeUpdate };
