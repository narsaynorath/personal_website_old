import React from "react";
import SocialLinks from "./SocialLinks";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">I'm Nar Saynorath.</h1>
      <h3>
        I'm a Toronto based <span>software engineer</span> currently
        attending the <span>University of Toronto</span>.
        I am passionate about applying my love for technology to solve problems
        for users in the realms of both <span>user experience</span> and
        <span>
          {" "}
          developing features
        </span>{" "}
        they need to live their best lives.
        Let's
        <a className="smoothscroll" href="#about">
          {" "}
          start scrolling
        </a>{" "}
        and learn more
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
