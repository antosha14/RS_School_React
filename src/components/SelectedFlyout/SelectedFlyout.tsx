import classnames from "./SelectedFlyout.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { flyoutActions } from "../../store/flyout";

function Flyout() {
  const selectedNumberOfEntries = useSelector(
    (state: RootState) => state.selection.selectedNumberOfEntries,
  );
  const dispatch = useDispatch();

  const unselectAllHandler = () => {
    dispatch(flyoutActions.unselectAllEntries());
  };

  const downloadHandler = () => {
    dispatch(flyoutActions.downloadAllSelectedEntries());
  };

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
      <button className={classnames.buttonDownload} onClick={downloadHandler}>
        Download
      </button>
    </div>
  );
}

export default Flyout;
