import React from "react";

import profilePic from "../assets/images/profilepic.jpg";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>
        <p>
          I consider myself a well-rounded individual who's a strong team player.
          Nothing makes me feel more satisfied than accomplishing goals with one another,
          especially if we learn a lot during the way!
        </p>

        <p>
          I am always interested in researching new technology and iterating on my own
          development process and methodologies until we get it right.
        </p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>Nar Saynorath</span>
              <br />
              <a href="mailto:nar@narsaynorath.com?Subject=Let's Get in Touch">
                nar@narsaynorath.com
              </a>
              <br />
              <span>(647)-667-2752</span>
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
