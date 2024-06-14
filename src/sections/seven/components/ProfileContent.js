import React from "react";
import "./ProfileContent.css";
import FirstContent from "./FirstContent";
import SecondContent from "./SecondContent";
import Post1 from "../assets/images/posts/Post1.jpg";
import Post2 from "../assets/images/posts/Post2.jpg";
import Post3 from "../assets/images/posts/Post3.jpg";


const ProfileContent = ({ userName }) => {
  // const postImages = [Post1, Post2, Post3];
  const posts = [
    {
      id: 1,
      date: '01 May 2024',
      image: Post1,
      caption: "Blossoms in a box, a gift of nature wrapped with love. 🌸📦 #FlowerPower #NatureLovers"    
    },
    {
      id: 2,
      date: '05 May 2024',
      image: Post2,
      caption: "Tangled tales and woven dreams, all packed neatly in a box. 🧵📦 #Crafting #Memories #Organization"    
    },
    {
      id: 3,
      date: '08 May 2024',
      image: Post3,
      caption: "Whispers of the past, echoing through an old post box. 📮✨ #Vintage #Memories #Nostalgia"    
    }]

  return (
    <div className="profile-content-container">
      <FirstContent />
      <SecondContent userName={userName} posts={posts}/>
    </div>
  );
};

export default ProfileContent;
