import React from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";

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
          Something about me.
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
          {/* TODO: Add download resume button
            <div className="columns download">
            <p>
              <a href="https://drive.google.com/file/d/1JGNomJQM0wFUnSz9z1MEMxmrdhubGrsa/view?usp=sharing" download>
                <FaCloudDownloadAlt style={{ paddingTop: '4px' }} /> Download Resume
              </a>
            </p>
          </div> */}
        </div>
      </div>
    </div>
  </section>
);

export default About;
