import classnames from "./ToggleAddStatusButton.module.css";

function ToggleAddStatusButton({ uid }: { uid: string }) {
  return (
    <div className={classnames.toggleStatusContainer}>
      <input
        className={`${classnames.tgl} ${classnames.tglSkewed}`}
        type="checkbox"
        id={uid}
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
