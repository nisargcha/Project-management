import React, { useState } from 'react';
import Profile from '../components/Profile';
import ProfileContent from '../components/ProfileContent';
import "./Home.css";

const Home = () => {
  const [activeTab, setActiveTab] = useState('Profile');
  const userName = "Mayur Chauhan";

  const renderContent = () => {
    switch (activeTab) {
      case "Profile":
        return <ProfileContent userName={userName}/>;
      default:
        return <ProfileContent />;
    }
  };

  return (
    <main className='main-body'>
  
      <Profile userName={userName} ctiveTab={activeTab} setActiveTab={setActiveTab}/>
      <div className='main-content'>
      {renderContent()}
      </div>
    </main>
  )
}

export default Home;