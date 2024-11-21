import React from "react";
import AboutBackground from "../Assets/background2.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-heading">
          Why Choose<span class="pink">This Opportunity ?</span>
        </h1>
        <div className="containerr">
          <div className="box">
            <h2>Zero Investment Required</h2>
            <ul>
              <li class="highlighted">
                Say goodbye to high startup costs. This opportunity lets you
                start your business without spending a single penny.
              </li>
            </ul>
          </div>
          <div className="box">
            <h2>Flexible Working Hours</h2>
            <ul>
              <li class="highlighted">
                Whether you're a student, stay-at-home parent, or a full-time
                employee, you can work at your convenience.
              </li>
            </ul>
          </div>
          <div className="box">
            <h2>No Office Needed</h2>
            <ul>
              <li class="highlighted">
                Work from anywhere—your home, a café, or even while traveling.
              </li>
            </ul>
          </div>
          <div className="box">
            <h2>Be Your Own Boss</h2>
            <ul>
              <li class="highlighted">
                Take charge of your future. Make decisions that align with your
                goals and lifestyle.
              </li>
            </ul>
          </div>
          <div>
            <div class="box">
              <h2>Unlimited Earning Potential</h2>
              <ul>
                <li class="highlighted">
                  The harder you work, the more you can earn. There’s no cap on
                  your income.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
