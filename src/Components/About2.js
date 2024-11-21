import React from "react";
import AboutBackground from "../Assets/background3.png";
import BannerImage from "../Assets/file (4).png";

const About = () => {
  return (
    <div>
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={AboutBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            <span class="pink">Who </span> Can Join
          </h1>
          <div className="containe">
            <div className="box">
              <h3>• Students</h3>
              <h4>Earn extra income while studying.</h4>
            </div>
            <br />
            <div className="box">
              <h3>• Stay-at-Home Parents</h3>
              <h4>Manage your time effectively and contribute financially.</h4>
            </div>{" "}
            <br />
            <div className="box">
              <h3>• Working Professionals</h3>
              <h4>Build a side hustle without disrupting your main job.</h4>
            </div>
            <br />
            <div className="box">
              <h3>• Retires</h3>
              <h4>Stay active and financially independent.</h4>
            </div>
            <br />
          </div>
          <h1 className="primary-heading">
            <span class="pink">Your Benefits</span>
          </h1>
          <div>
            <button className="secondary-button">•	 100% Free to Start </button>{" "}
            <br />
            <button className="secondary-button">•	 Work from Anywhere </button>
            <br />
            <button className="secondary-button">•	 No Experience Required </button>{" "}
            <br />
            <button className="secondary-button">•	 Daily or Weekly Payouts </button>
            <br />
            <button className="secondary-button">•	 Supportive Community and Training </button>{" "}
            <br />
          </div>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
