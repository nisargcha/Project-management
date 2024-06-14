import React from "react";
import "./Profile.css";
import avatar from "../assets/images/avatar.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faNewspaper,
  faHeart,
  faUsers,
  faImages,
} from "@fortawesome/free-solid-svg-icons";

const Profile = ({ userName,activeTab, setActiveTab }) => {
  // const userName = "Mayur Chauhan";
  const designation = "React Developer";
  
  return (
    <div className="profile-container">
      <img src={avatar} alt="user" className="profile-image" />
      <ul className="profile-info">
        <li>{userName}</li>
        <li>{designation}</li>
      </ul>
      {/* <nav className="profile-nav">
        <ul className="profile-nav-items">
          <li className="selected">
            <FontAwesomeIcon
              icon={faNewspaper}
              style={{ marginRight: "8px" }}
            />
            Profile
          </li>
          <li>
            <FontAwesomeIcon icon={faHeart} style={{ marginRight: "8px" }} />
            Followers
          </li>
          <li>
            <FontAwesomeIcon icon={faUsers} style={{ marginRight: "8px" }} />
            Friends
          </li>
          <li>
            <FontAwesomeIcon icon={faImages} style={{ marginRight: "8px" }} />
            Gallery
          </li>
        </ul>
      </nav> */}
       <nav className="profile-nav">
        <ul className="profile-nav-items">
          <li
            className={activeTab === "Profile" ? "selected" : ""}
            onClick={() => setActiveTab("Profile")}
          >
            <FontAwesomeIcon
              icon={faNewspaper}
              style={{ marginRight: "8px" }}
            />
            Profile
          </li>
          <li
            className={activeTab === "Followers" ? "selected" : ""}
            onClick={() => setActiveTab("Followers")}
          >
            <FontAwesomeIcon icon={faHeart} style={{ marginRight: "8px" }} />
            Followers
          </li>
          <li
            className={activeTab === "Friends" ? "selected" : ""}
            onClick={() => setActiveTab("Friends")}
          >
            <FontAwesomeIcon icon={faUsers} style={{ marginRight: "8px" }} />
            Friends
          </li>
          <li
            className={activeTab === "Gallery" ? "selected" : ""}
            onClick={() => setActiveTab("Gallery")}
          >
            <FontAwesomeIcon icon={faImages} style={{ marginRight: "8px" }} />
            Gallery
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Profile;
