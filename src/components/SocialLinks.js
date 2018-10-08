import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a target="_blank"
         rel="noopener noreferrer"
         href="mailto:nar@narsaynorath.com?Subject=Let's Get in Touch">
        <FaEnvelope />
      </a>
    </li>
    <li>
      <a target="_blank"
         rel="noopener noreferrer"
         href="https://www.facebook.com/nar.saynorath/">
        <FaFacebook />
      </a>
    </li>
    <li>
      <a target="_blank"
         rel="noopener noreferrer"
         href="https://www.linkedin.com/in/nar-saynorath">
        <FaLinkedin />
      </a>
    </li>
    <li>
      <a target="_blank"
         rel="noopener noreferrer"
         href="https://www.github.com/narsaynorath/">
        <FaGithub />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
