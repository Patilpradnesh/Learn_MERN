import React from "react";
import { useAuth } from "../store/auth";
import { useState } from "react";
export const About = () => {

  const[userData,setUserData]=useState(true);
  const {user}=useAuth();
  if(userData && user){
    setUserData({
      username:user.userName,
    })
    setUserData(false);
  }
  return (
    <div className="about-wrapper">
      <div className="about-card">
        <h1 className="about-heading">👋 Hey {user.userName}</h1>
        <h1 className="about-heading"> This is the About Page!</h1>
        <p className="about-description">
          Welcome to our Learn MERN app. This section introduces who we are and
          what we do.
        </p>
        <p className="about-description">
          We are a team of passionate developers dedicated to helping you learn
          the MERN stack. Our goal is to provide you with the resources and
          support you need to succeed in your coding journey.
        </p>
      </div>
    </div>
  );
};
