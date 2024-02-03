import React, { useState } from "react";
import { Button } from "../ui/button";
import Modal from "../Modal";

function Home(){
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <div>
          <h5 className="font-space-mono"> Name Here </h5>
          <h4 className="font-space-mono"> How to play the game? </h4>
      <button className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Get Started
      </button>

      {modalOpen && <Modal setOpenModal={setModalOpen} />}
        </div>
      );
}

export default Home;
