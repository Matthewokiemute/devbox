import React from 'react';
import "./Featured.scss";

const Featured = () => {
  return (
    <div className="featured">
        <div className="container">
            <div className="left">
                <h1>Work on <i>Open Source</i> projects to upscale your skills</h1>
                <div className="search">
                    <div className="searchInput">
                        <img src="./img/searc.png" alt="" />
                        <input type="text" placeholder="Gain experience faster..." />
                    </div>
                    <button>Search</button>
                </div>
                <div className="popular">
                    <span>Popular:</span>
                    <button>Web Design</button>
                    <button>Logo Design</button>
                    <button>WordPress</button>
                    <button>AI Services</button>
                </div>
            </div>
            <div className="right">
                <img src="./img/man.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Featured;