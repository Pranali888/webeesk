import React from "react";
import BannerBackground from "../Assets/background1.png";
import Logo from "../Assets/logo.png";
import BannerImage from "../Assets/home-banner-image.png";

const Home = () => {
  return (
    <div className="home-container">
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Start Your Own Business with{" "}
            <span class="pink">Zero Investment</span>
          </h1>
          <p className="primary-text">
            Are you looking for a part-time earning opportunity that fits
            seamlessly into your life? Discover how you can start your own
            business without any upfront investment, enjoy the freedom to work
            on your schedule, and reap unlimited benefits—all from the comfort
            of your home.
          </p>
          <row>
            <button className="secondary-button">Work on Your Terms </button>{" "}
            <br />
            <button className="secondary-button">Flexible Hours </button>
            <br />
            <button className="secondary-button">No Office Required </button>
          </row>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
