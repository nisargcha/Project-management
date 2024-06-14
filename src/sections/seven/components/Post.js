import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faEllipsisV, faHeart, faShare } from "@fortawesome/free-solid-svg-icons";
import avatar from "../assets/images/avatar.jpg";
import "./Post.css";

const Post = ({ userName, image, caption, date }) => {
   const [showCommentInput, setShowCommentInput] = useState(false);
//    const [showShareOptions, setShowShareOptions] = useState(false);

  const showComment = () => {
    setShowCommentInput(!showCommentInput);
  }


  return (
    <div className="post-container">
      <div className="post-header">
        <div className="user-info">
          <img src={avatar} alt="user" className="profile-pic" />
          <div className="user-details">
            <p>{userName}</p>
            <p className="date">{date}</p>
          </div>
        </div>
        <div className="options">
          <button type='button'>
            <FontAwesomeIcon icon={faEllipsisV} />
          </button>
        </div>
      </div>
      <div className="post-body">
        <p className="post-caption">{caption}</p>
        <img src={image} alt="post" />
      </div>
      <div className="post-foot">
        <button className="like">
            <FontAwesomeIcon icon={faHeart} className="fa-icon red"/>
        </button>
        <button onClick={showComment} className="comment">
            <FontAwesomeIcon icon={faComment} className="fa-icon"/>
        </button>
        <button className="share">
            <FontAwesomeIcon icon={faShare} className="fa-icon blue"/>
        </button>
        {showCommentInput && (
        <form className="comment-input">
          {/* Render your comment input component here */}
          <input type="text" placeholder="Write a comment..." />
          <button type="submit" className="comment-sent-button">Post</button>
        </form>
      )}
      </div>
    </div>
  );
};

export default Post;
