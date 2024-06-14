import React from 'react'
import PropTypes from 'prop-types';
import { faInstagram, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'; 
import './components/Card.css'
import profilepic from './components/card1.jpg';
import circularpic from './components/circular.jpeg'; 

function SocialIcons() {
    return (
  <div className="social-icons">
        <faInstagram style={{ marginRight: '10px' , color: '#E75480', fontSize: '20px' , cursor: 'pointer'}} /> 
        <faFacebook  style={{ marginRight: '10px' , color: '#00008b', fontSize: '20px', cursor: 'pointer'}} />
        <faTwitter style={{ marginRight: '10px' , color: '#Add8e6', fontSize: '20px', cursor: 'pointer'}} /> 
        <faLinkedin style={{color: '#Add8e6' , fontSize: '20px', cursor: 'pointer'}}/>
  </div>
    );
  }
          
  
  function FollowerDetails({ title, value }) {
    return (
      <div className="follower-column">
        <p>{title}</p>
        <p>{value}</p>
      </div>
    );
  }
  
   
  function Card({ heading, subheading, followers, following, totalPosts }) {
    return (
      <div className='card'>
        <div className='card-img'>
          <img className='full-img' src={profilepic} alt="profile" />
        </div>
        <div className='card-content'>
          <img className='circular-img' src={circularpic} alt="avatar" />
          <h4>{heading}</h4>
          <h5>{subheading}</h5>
          <SocialIcons />
          <div className="divider"/>
          <div className="follower-details">
            <FollowerDetails title="Followers" value={followers} />
            <FollowerDetails title="Following" value={following} />
            <FollowerDetails title="Total Posts" value={totalPosts} />
          </div>
        </div>
      </div>
    );
  }



export default function View() {
  return (
    <div className="App">
      <div className="header">
        <div className="header-left">
          <h1>User Cards</h1>
          <p>Dashboard &#8226; User &#8226; Cards </p>
        </div>
        <div className="header-right">
          <button type='button'>+ New User</button>
        </div>
      </div>
      <div className="container">
        <Card heading="John Doe" subheading="Developer" followers="9.91K" following="1.95K" totalPosts="9.12K" />
        <Card heading="Jane Smith" subheading="Designer" followers="12.5K" following="2.35K" totalPosts="10.2K" />
        <Card heading="Mike Johnson" subheading="Marketing Manager" followers="8.75K" following="1.65K" totalPosts="11.8K" />
      </div>
    </div>
  )
}

FollowerDetails.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  };

Card.propTypes = {
    heading: PropTypes.string.isRequired,
    subheading: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    totalPosts: PropTypes.number.isRequired,
  };
