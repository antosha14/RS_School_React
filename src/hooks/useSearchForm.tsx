import { useRouter } from "next/router";
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
    const newQueryParams = {
      query: currentQuery,
      page: "1",
      ...(router.query.details && { details: router.query.details }),
    };
    router.push({ pathname: router.pathname, query: newQueryParams });
  };

  return { currentQuery: currentQuery, handleInputChange, handleSubmit };
};

export default useSearchForm;
