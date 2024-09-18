"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

const useSearchForm = (inputRef: React.RefObject<HTMLInputElement>) => {
  const router = useRouter();
  const { getQueryFromLocalStorage, setQueryInLocalStorage } =
    useLocalStorage();
  const [currentQuery, setCurrentQuery] = useState<string>(
    getQueryFromLocalStorage() || "",
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputRef.current) {
      inputRef.current.blur();
    }

    setQueryInLocalStorage(currentQuery);
    router.push(`/?query=${currentQuery}&page=${1}`);
  };

  return { currentQuery: currentQuery, handleInputChange, handleSubmit };
};

export default useSearchForm;
