import "./Form.css";
import { Input, Button } from "../index";
import { useEffect } from "react";

interface searchProps {
  onFormSubmission: (event?: React.FormEvent<HTMLFormElement>) => void;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  currentQuery: string;
}

function SearchForm(props: searchProps) {
  useEffect(() => {
    props.onFormSubmission();
  }, []);

  return (
    <form onSubmit={props.onFormSubmission} className="formContainer">
      <Input
        onInputChange={props.onInputChange}
        currentQuery={props.currentQuery}
      ></Input>
      <Button></Button>
    </form>
  );
}

export default SearchForm;
