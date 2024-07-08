import "./ButtonError.css";
import { useState } from "react";

function ButtonError() {
  const [errorState, setIsError] = useState<boolean>(false);

  const throwError = () => {
    return setIsError(true);
  };

  if (errorState) {
    throw new Error(
      "Did you press the red button? What a pity... Now you should reload the page. Be careful next time.",
    );
  }

  return (
    <button className="crash" onClick={throwError}>
      Crash the app
    </button>
  );
}

export default ButtonError;
