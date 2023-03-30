import React from "react";
import Featured from "../../components/featured";
import Features from "../../components/features";
import ProjectCard from "../../components/projectCard";
import Slide from "../../components/slide";
import TrustedBy from "../../components/trustedBy";
import "./Home.scss";

const Home = () => {
  return (
    <div>
      <Featured />
      <TrustedBy />
      <Slide />
      <Features />
      {/* Features Section */}
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>Devbox Business.</h1>
            <h1>A business solution designed for teams</h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>
            <div className="title">
              <img src="./img/check.png" alt="check" />
              Connect to freelancers with proven business experience
            </div>
            <div className="title">
              <img src="./img/check.png" alt="check" />
              Get matched with the perfect talent by a customer success manager
            </div>
            <div className="title">
              <img src="./img/check.png" alt="check" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Explore Devbox Business</button>
          </div>
          <div className="item">
            <video src="./img/video.mp4" controls></video>
          </div>
        </div>
      </div>
      {/* End Features Section */}
      <ProjectCard />
    </div>
  );
};

export default Home;
