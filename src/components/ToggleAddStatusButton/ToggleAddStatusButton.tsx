import classnames from "./ToggleAddStatusButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { flyoutActions } from "../../store/flyout";
import { Character } from "../../services/apiSlice";

function ToggleAddStatusButton({ character }: { character: Character }) {
  const selectedEntries = useSelector(
    (state: RootState) => state.selection.entriesSelected,
  );
  const dispatch = useDispatch();

  const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked === true) {
      dispatch(flyoutActions.addEntryToSelected(character));
    } else {
      dispatch(flyoutActions.deleteEntryFromSelected(character));
    }
  };

  const checkEntreePresenceInStore = (uid: string) => {
    return selectedEntries.some((character: Character) => character.uid == uid);
  };

  return (
    <div className={classnames.toggleStatusContainer}>
      <input
        className={`${classnames.tgl} ${classnames.tglSkewed}`}
        type="checkbox"
        id={character.uid}
        onChange={handleCheckChange}
        checked={checkEntreePresenceInStore(character.uid)}
      />
      <label
        className={classnames.tglBtn}
        data-tg-off="Add"
        data-tg-on="Remove"
        htmlFor={character.uid}
      ></label>
    </div>
  );
}

export default ToggleAddStatusButton;
