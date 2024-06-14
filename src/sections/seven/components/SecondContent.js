import React, { useRef } from "react";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faVideo } from '@fortawesome/free-solid-svg-icons';
import Post from "./Post";

const SecondContent = ({ userName, posts }) => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    console.log(event.target.files[0]);
  };

  return (
    <div className="second-content">
      <form className="form">
        <div className="row">
          <textarea
            className="post-caption"
            placeholder="What's on your mind? Write here..."
          />
        </div>
        <div className="row2">
          <div className="one">
            <div className="file-input-container">
              <button type='button' className="file-input-button button" onClick={handleButtonClick}>
                <FontAwesomeIcon icon={faImage} size="2px" className="btn-icons upload-img"/>
                Image/Video
              </button>
              <input
                type="file"
                ref={fileInputRef}
                className="file-input"
                onChange={handleFileChange}
              />
            </div>
            <button type='button' className="button">
              <FontAwesomeIcon icon={faVideo} size="2px" className="btn-icons streaming"/>
              Streaming
            </button>
          </div>

          <div className="two">
            <button type="submit" className="post-btn">Post</button>
          </div>
        </div>
      </form>

      <div className="posts-container">
        {posts.map((post) =>
          <Post key={post.id} userName={userName} date={post.date} image={post.image} caption={post.caption}/>
        )}
      </div>
    </div>
  );
};

SecondContent.propTypes = {
  userName: PropTypes.string.isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    image: PropTypes.string,
    caption: PropTypes.string
  })).isRequired
};

export default SecondContent;
