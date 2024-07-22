import classnames from "./ToggleAddStatusButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { flyoutActions } from "../../store/flyout";

function ToggleAddStatusButton({ uid }: { uid: string }) {
  const selectedEntries = useSelector(
    (state: RootState) => state.selection.entriesSelected,
  );
  const dispatch = useDispatch();

  const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked === true) {
      dispatch(flyoutActions.addEntryToSelected(uid));
    } else {
      dispatch(flyoutActions.deleteEntryFromSelected(uid));
    }
  };

  const checkEntreePresenceInStore = (uid: string) => {
    return selectedEntries.includes(uid);
  };

  return (
    <div className={classnames.toggleStatusContainer}>
      <input
        className={`${classnames.tgl} ${classnames.tglSkewed}`}
        type="checkbox"
        id={uid}
        onChange={handleCheckChange}
        checked={checkEntreePresenceInStore(uid)}
      />
      <label
        className={classnames.tglBtn}
        data-tg-off="Add"
        data-tg-on="Remove"
        htmlFor={uid}
      ></label>
    </div>
  );
}

export default ToggleAddStatusButton;
