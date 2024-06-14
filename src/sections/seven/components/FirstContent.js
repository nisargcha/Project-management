import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelope,
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faXTwitter
} from "@fortawesome/free-brands-svg-icons";

const FirstContent = () => {
  const followers = 5230;
  const following = 1230;
  const aboutText =
    "Experienced React Developer skilled in creating dynamic, high-performance web applications.";
  const address = "Lives At Anand";
  const email = "mayurchauhan1107@gmail.com";
  const designation = "React Developer Intern";
  const workplace = "Tech Elecon";
  const institute = "Studied at MBIT, V.V Nagar";
  return (
    <div className="first-content">
      <div className="audience-info card">
        <ul className="count">
          <li>{followers} </li>
          <li>Followers</li>
        </ul>
        <ul className="count">
          <li>{following} </li>
          <li>Following</li>
        </ul>
      </div>
      <div className="card about">
        <h2>About</h2>
        <p>{aboutText}</p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="fa-icon" />
            {address}
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} className="fa-icon" />
            {email}
          </li>
          <li>
            <FontAwesomeIcon icon={faBriefcase} className="fa-icon" />
            {designation + " at " + workplace}
          </li>
          <li>
            <FontAwesomeIcon icon={faGraduationCap} className="fa-icon" />
            {institute}
          </li>
        </ul>
      </div>
      <div className="card social">
        <h2>Social</h2>
        <ul>
          <li>
            <FontAwesomeIcon
              icon={faFacebook}
              className="social-icon"
              style={{ color: "blue" }}
            />
            <a href="https://www.facebook.com/">https://www.facebook.com/</a>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faInstagram}
              className="social-icon"
              style={{ color: "red" }}
            />
            <a href="https://www.instagram.com/">https://www.instagram.com/</a>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faLinkedin}
              className="social-icon"
              style={{ color: "darkblue" }}
            />
            <a href="https://www.linkedin.com/">https://www.linkedin.com/</a>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faXTwitter}
              className="social-icon"
              style={{ color: "black" }}
            />
            <a href="https://www.twitter.com/">https://www.twitter.com/</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FirstContent;
