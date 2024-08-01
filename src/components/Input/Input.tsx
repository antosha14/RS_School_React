import classnames from "./Input.module.css";

interface inputProps {
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  currentQuery: string;
}

function Input(props: inputProps) {
  return (
    <input
      onChange={props.onInputChange}
      value={props.currentQuery}
      type="search"
      placeholder="Search for characters in Star trek API"
      className={classnames.searchInput}
    ></input>
  );
}

export default Input;
