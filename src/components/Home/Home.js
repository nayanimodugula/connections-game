import React, { useState } from "react";
import { Button } from "../ui/button";
import Modal from "../Modal";
import { useNavigate } from "react-router-dom";
import Instructions from "../Instructions";

function Home(){
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = "../Instructions"; 
        navigate(path);
  }

    // const [modalOpen, setModalOpen] = useState(false);
    return (
        <div>
          <h5 className="font-space-mono"> Name Here </h5>
          <h4 className="font-space-mono"> Learn Language by grouping words! </h4>
      <button className="openModalBtn"
        onClick={routeChange}
      >
        Get Started
      </button>
        </div>
      );
}

export default Home;
