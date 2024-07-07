import { Component } from "react";
import "./LoadingSpinner.css";

class LoadingSpinner extends Component {
  constructor(props: string) {
    super(props);
  }

  render() {
    return (
      <div className="circles">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
        <div className="circle4"></div>
        <div className="circle5"></div>
        <div className="circle6"></div>
        <div className="circle7"></div>
        <div className="circle8"></div>
        <div className="circle9"></div>
        <div className="circle10"></div>
        <div className="circle11"></div>
        <div className="circle12"></div>
        <div className="circle13"></div>
        <div className="circle14"></div>
        <div className="circle15"></div>
      </div>
    );
  }
}

export default LoadingSpinner;
