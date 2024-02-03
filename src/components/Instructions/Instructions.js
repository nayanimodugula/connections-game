import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Instructions(){
    const containerStyle = {
      maxWidth: '900px', // Set the maximum width as per your requirement
      margin: '0 auto',  // Center the container horizontally
      padding: '20px',   // Add some padding for better readability
    };
  
    const textStyle = {
      width: '100%', // Allow the text to take the full width of the container
      // Additional styling as needed
    };

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = "../Create"; 
        navigate(path);
    }
  return (
      <div style={containerStyle}>
        <strong><h2 className="font-space-mono"> How to play Game_Name </h2></strong>
        <h3 style={textStyle} className="font-space-mono">
        Welcome to WordQuest! Immerse yourself in language exploration. Group words into themed sets, each unlocking new linguistic adventures. Sharpen your skills, challenge friends, and embark on a journey of learning and fun!
        </h3>
        <button className="openModalBtn"
        onClick={routeChange}
      >
        Get Started
      </button>
      </div>
    );
}

export default Instructions;
