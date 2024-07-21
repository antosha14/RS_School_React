// import classnames from "./SelectedFlyout.module.css";
// import { useDispatch, useSelector } from "react-redux";
// import { selectedStore, selectionActions } from "../../store/viewState";

// function NavigationBar() {
//   const selectedNumberOfEntries = useSelector(
//     (state) => state.flyout.showFlyout,
//   );
//   const dispatch = useDispatch();

//   const unselectAllHandler = () => {
//     dispatch(selectionActions.unselectAllEntries());
//   };

//   const downloadHandler = () => {
//     dispatch(selectionActions.downloadAllSelectedEntries());
//   };

//   return (
//     <div className={classnames.flyoutContainer}>
//       <p className={classnames.navigationContainer}>
//         {`${selectedNumberOfEntries} items are selected`}
//       </p>
//       <button className={classnames.buttonNext} onClick={unselectAllHandler}>
//         Unselect all
//       </button>
//       <button className={classnames.buttonDownload} onClick={downloadHandler}>
//         Download
//       </button>
//     </div>
//   );
// }

// export default NavigationBar;
