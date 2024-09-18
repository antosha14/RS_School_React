import classnames from "./LoadingSpinner.module.css";

function LoadingSpinner() {
  return (
    <div className={classnames.circles} data-testid="loader">
      <div className={classnames.circle1}></div>
      <div className={classnames.circle2}></div>
      <div className={classnames.circle3}></div>
      <div className={classnames.circle4}></div>
      <div className={classnames.circle5}></div>
      <div className={classnames.circle6}></div>
      <div className={classnames.circle7}></div>
      <div className={classnames.circle8}></div>
      <div className={classnames.circle9}></div>
      <div className={classnames.circle10}></div>
      <div className={classnames.circle11}></div>
      <div className={classnames.circle12}></div>
      <div className={classnames.circle13}></div>
      <div className={classnames.circle14}></div>
      <div className={classnames.circle15}></div>
    </div>
  );
}

export default LoadingSpinner;
