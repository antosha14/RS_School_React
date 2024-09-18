import classnames from "./Button.module.css";

function Button() {
  return (
    <button type="submit" className={classnames.search}>
      Search
    </button>
  );
}

export default Button;
