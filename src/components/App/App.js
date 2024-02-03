import React from "react";
import Header from "../Header";
import Game from "../Game";
import Create from "../Create";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "../Home";
import { Toaster } from "../ui/toaster";
import PuzzleDataProvider from "../../providers/PuzzleDataProvider";
import GameStatusProvider from "../../providers/GameStatusProvider";
import  "../../styles.css"
import Instructions from "../Instructions";

function App() {
  return (
    <PuzzleDataProvider>
      <GameStatusProvider>
        <Router>
          <div className="App">
            <Toaster />
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/instructions" element={<Instructions/>} />
              <Route path="/create" element={<Create/>} />
              <Route path="/game" element={<Game/>} />
            </Routes> 
          </div>
        </Router>
        </GameStatusProvider>
    </PuzzleDataProvider>  
  );
}


export default App;
