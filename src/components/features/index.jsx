import React from "react";
import "./Features.scss";

const Features = () => {
  return (
    <div className="features">
      <div className="container">
        <div className="item">
        <h1>A whole world of open-source projects at your fingertips.</h1>
          <div className="title">
            <img src="./img/check.png" alt="Check" />
            The best for every project
          </div>
          <p>Find high quality services at every price point. No hourly rates, just project-based pricing.</p>
          <div className="title">
            <img src="./img/check.png" alt="Check" />
            The best for every project
          </div>
          <p>Find high quality services at every price point. No hourly rates, just project-based pricing.</p>
          <div className="title">
            <img src="./img/check.png" alt="Check" />
            The best for every project
          </div>
          <p>Find high quality services at every price point. No hourly rates, just project-based pricing.</p>
        </div>
        <div className="item">
          <video src="./img/video.mp4" controls></video>
        </div>
      </div>
    </div>
  );
};

export default Features;
