import { Input, Button } from "../index";
import { useEffect } from "react";
import classnames from "./Form.module.css";

interface searchProps {
  onFormSubmission: (event?: React.FormEvent<HTMLFormElement>) => void;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  currentQuery: string;
}

function SearchForm(props: searchProps) {
  const onFormSubmission = props.onFormSubmission;
  useEffect(() => {
    onFormSubmission();
  }, []);

  return (
    <form
      onSubmit={props.onFormSubmission}
      className={classnames.formContainer}
    >
      <Input
        onInputChange={props.onInputChange}
        currentQuery={props.currentQuery}
      ></Input>
      <Button></Button>
    </form>
  );
}

export default SearchForm;
