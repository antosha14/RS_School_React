import { useState, useEffect } from "react";

const useLocalStorage = (key: string) => {
  const [value, setValue] = useState(localStorage.getItem(key) || "");

  useEffect(() => {
    localStorage.setItem(key, value || "");
    return () => {
      localStorage.setItem(key, value || "");
    };
  }, [key, value]);

  return [value, setValue] as const;
};

export default useLocalStorage;
