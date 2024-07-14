import "./ButtonError.css";
import { useState } from "react";

function ButtonError() {
  const [errorState, setIsError] = useState<boolean>(false);

  const throwError = () => {
    return setIsError(true);
  };

  if (errorState) {
    throw new Error("Red button");
  }

  return (
    <button className="crash" onClick={throwError}>
      Crash the app
    </button>
  );
}

export default ButtonError;
