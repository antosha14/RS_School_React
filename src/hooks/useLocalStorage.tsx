const themeKey = "darkTheme";
const queryKey = "currentQuery";

const useLocalStorage = () => {
  const isServer = typeof window === "undefined";

  const setThemeInLocalStorage = (newDarkTheme: boolean): void => {
    if (!isServer) {
      localStorage.setItem(themeKey, JSON.stringify(newDarkTheme));
    }
  };

  const getThemeFromLocalStorage = (): boolean => {
    if (!isServer) {
      return localStorage.getItem(themeKey) == "false" ? false : true;
    }
    return true;
  };

  const setQueryInLocalStorage = (newQuery: string): void => {
    if (!isServer) {
      localStorage.setItem(queryKey, newQuery);
    }
  };

  const getQueryFromLocalStorage = (): string => {
    if (!isServer) {
      const currentQuery = localStorage.getItem(queryKey);
      return currentQuery ? currentQuery : "";
    }
    return "";
  };

  return {
    setThemeInLocalStorage,
    getThemeFromLocalStorage,
    setQueryInLocalStorage,
    getQueryFromLocalStorage,
  };
};

export default useLocalStorage;
