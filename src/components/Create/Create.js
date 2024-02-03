import React, { useState } from 'react';
  
// function Create(){
//     return (
//         <div>
//           <h2>Create Page</h2>
          
//           {/* Add content for the home page */}
//         </div>
//       );
// }
// import React, { useState } from 'react';

const Create = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="centered-container">
      <h2 className="text1"><super>Let's get Ready!</super> </h2>
      <div className="text-with-dropdown">
        <p className="text">I am going to learn:</p>
        <select value={selectedOption} onChange={handleDropdownChange}>
          <option value="">Select an option</option>
          <option value="option1">Korean</option>
          <option value="option2">Hindi</option>
          <option value="option3">Mandarin</option>
        </select>
        </div>
      <div className="text-with-dropdown">
        <p className="text">Number of Groups:</p>
        <select value={selectedOption} onChange={handleDropdownChange}>
          <option value="">Select an option</option>
          <option value="option1">3</option>
          <option value="option2">4</option>
          <option value="option3">5</option>
        </select>
        </div>
      <div className="text-with-dropdown">
        <p className="text">I am going to learn:</p>
        <select value={selectedOption} onChange={handleDropdownChange}>
          <option value="">Select an option</option>
          <option value="option1">Korean</option>
          <option value="option2">Hindi</option>
          <option value="option3">Mandarin</option>
        </select>
      </div>
    </div>
  );
};

export default Create;

// export default Create;
