import { createContext, ReactElement, useContext, useState } from "react";

const ThemeContext = createContext(true);
const ThemeUpdateContext = createContext(() => {});

const useTheme = () => {
  return useContext(ThemeContext);
};

const useThemeUpdate = () => {
  return useContext(ThemeUpdateContext);
};

const ThemeProvider = ({ children }: { children: ReactElement }) => {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevTheme) => !prevTheme);
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
