import { createContext, ReactElement, useContext, useState } from "react";

const initialTheme =
  localStorage.getItem("darkTheme") == "false" ? false : true;

const ThemeContext = createContext(initialTheme);
const ThemeUpdateContext = createContext(() => {});

const useTheme = () => {
  return useContext(ThemeContext);
};

const useThemeUpdate = () => {
  return useContext(ThemeUpdateContext);
};

const ThemeProvider = ({ children }: { children: ReactElement }) => {
  const [darkTheme, setDarkTheme] = useState(initialTheme);

  console.log(Boolean(localStorage.getItem("darkTheme")));
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
