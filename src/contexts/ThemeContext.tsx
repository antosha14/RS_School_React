"use client";

import {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";
import useLocalStorage from "../hooks/useLocalStorage";

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
  const { getThemeFromLocalStorage } = useLocalStorage();
  useEffect(() => {
    const initialTheme = getThemeFromLocalStorage();
    setDarkTheme(initialTheme);
  }, []);

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
