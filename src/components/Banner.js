import React from "react";
import SocialLinks from "./SocialLinks";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">I'm Nar Saynorath.</h1>
      <h3>
        I'm a Toronto based <span>software engineer</span> currently
        attending the <span>University of Toronto</span>.
        I am passionate about applying my love for solving problems with technology
        to improve both the <span>user experience</span> and
        <span>
          {" "}
          functionality
        </span>{" "}
        of software for customers.
        <br />
        Let's learn more
        <a className="smoothscroll" href="#about">
          {" "}
          about me
        </a>.
      </h3>
      <hr />
      <SocialLinks />
    </div>
  </div>
);

export default Banner;
