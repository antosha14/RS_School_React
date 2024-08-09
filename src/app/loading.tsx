import { LoadingSpinner } from "../components";
import classNames from "../styles/MainPage.module.css"

export default function Loading() {
  return (<div className={classNames.mainContainerLight}><LoadingSpinner/></div>);
}
