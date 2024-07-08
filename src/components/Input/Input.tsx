import "./Input.css";

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
      placeholder="Search for animals in Star trek API"
    ></input>
  );
}

export default Input;
