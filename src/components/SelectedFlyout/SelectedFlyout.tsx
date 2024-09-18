import classnames from "./SelectedFlyout.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { flyoutActions } from "../../store/flyout";
import charactersToCsv from "../../services/charactersToCsv";

function Flyout() {
  const selectedNumberOfEntries = useSelector(
    (state: RootState) => state.selection.selectedNumberOfEntries,
  );
  const selectedEntries = useSelector(
    (state: RootState) => state.selection.entriesSelected,
  );

  const dispatch = useDispatch();

  const unselectAllHandler = () => {
    dispatch(flyoutActions.unselectAllEntries());
  };

  const charactersCsv = charactersToCsv(selectedEntries);
  const csvURL = URL.createObjectURL(charactersCsv);

  return (
    <div className={classnames.flyoutContainer}>
      <p className={classnames.dataContainer}>
        {`Selected ${selectedNumberOfEntries} items`}
      </p>
      <button
        className={classnames.buttonUnselect}
        onClick={unselectAllHandler}
      >
        Unselect all
      </button>
      <a
        className={classnames.buttonDownload}
        download={`${selectedNumberOfEntries}_characters.csv`}
        href={csvURL}
      >
        Download
      </a>
    </div>
  );
}

export default Flyout;
