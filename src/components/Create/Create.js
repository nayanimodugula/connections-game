import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [enteredText, setEnteredText] = useState('');
  const handleDropdownChange1 = (event) => {
    setSelectedOption1(event.target.value);
  };

  const handleDropdownChange2 = (event) => {
    setSelectedOption2(event.target.value);
  };

  const handleInputChange = (event) => {
    setEnteredText(event.target.value);
  };

  let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = "../Game"; 
        navigate(path);
    }
  const containerStyle = {
    maxWidth: '900px', // Set the maximum width as per your requirement
    margin: '0 auto',  // Center the container horizontally
    padding: '20px',   // Add some padding for better readability
  };

  return (
    <div style = {containerStyle}>
      <strong><h2 className="font-space-mono"> Let's get Ready! </h2></strong>
      <div className="text-with-dropdown">
        <p className="text">I am going to learn:</p>
        <select value={selectedOption1} onChange={handleDropdownChange1}>
          <option value="">Select an option</option>
          <option value="option1">Korean</option>
          <option value="option2">Hindi</option>
          <option value="option3">Mandarin</option>
        </select>
        </div>
      <div className="text-with-dropdown">
        <p className="text">Number of Groups:</p>
        <select value={selectedOption2} onChange={handleDropdownChange2}>
          <option value="">Select an option</option>
          <option value="option1">3</option>
          <option value="option2">4</option>
          <option value="option3">5</option>
        </select>
        </div>
      <div className="input-group">
        <p className="text">Text Entry:</p>
        <input
          type="text"
          value={enteredText}
          onChange={handleInputChange}
          className="input-text"
          placeholder="Enter text here"
        />
      </div>
      <button className="openGameBtn"
        onClick={routeChange}
      >
        Play
      </button>
    </div>
  );
};

export default Create;

// export default Create;
