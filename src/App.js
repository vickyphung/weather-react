import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './Home';
import HomeThree from './Components/HomeThree';
import React, { useEffect, useState } from "react";
import Zipcode from './Components/Zipcode'
import Coordinates from './Components/Coordinates';

function App() {

  return (
    <div className="AppContainer">

        <div>
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/coordinates" element={<Coordinates />} />
            <Route path="/zipcode" element={<Zipcode />} />
                      

          </Routes>
        </div>
      </div>
  );
}

export default App;
