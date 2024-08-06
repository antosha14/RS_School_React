import { Button } from "../index";
import { useRef } from "react";
import useSearchForm from "../../hooks/useSearchForm";
import classNames from "./Form.module.css";

function SearchForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { currentQuery, handleInputChange, handleSubmit } =
    useSearchForm(inputRef);

  return (
    <form onSubmit={handleSubmit} className={classNames.formContainer}>
      <input
        ref={inputRef}
        onChange={handleInputChange}
        value={currentQuery}
        type="search"
        placeholder="Search for characters in Star trek API"
        className={classNames.searchInput}
      ></input>
      <Button></Button>
    </form>
  );
}

export default SearchForm;
