import React from "react";
import { useNavigate } from "react-router-dom";

import InfoModal from "../modals/InfoModal";

function Header() {
  let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = "../"; 
        navigate(path);
  }
  const textHoverStyle = {
    cursor: 'pointer',
    // Add other styles as needed
  };

  return (
    <header>
      <h1 className="font-space-mono" onClick={routeChange} style={textHoverStyle} > Groupology </h1>
      <InfoModal/>
    </header>
    
  );
}

export default Header;
