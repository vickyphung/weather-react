import './App.css';
// import { Route, Routes } from "react-router-dom";
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react';
// import Home from './HomeB';
import Search from './Components/Search';
import Nav from './Components/Nav';
import Geolocate from './Components/Geolocate';
import { ThemeContext } from './Components/Theme/theme-context';
import SearchCoordinateInput from './Components/Home';
import SearchCoordinate from './Components/SearchCoordinate';
import Weather from './Components/Weather';
import DateTime from './Components/DateTime';

function App() {

  const navigate = useNavigate();

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;


  const [zipcodeInput, setZipcodeInput] = useState('22312')
  const setZipcodeInputAndLink = (zipcode) => {
      setZipcodeInput(zipcode)
      navigate('/coordinates')
  }    

  const [lat, setLat] = useState({
  lat: 38.8191
  });

  const setLatAndLink = (lat) => {
      setLat(lat)
  }
  
  const [lon, setLon] = useState({
     lon: -77.1484
  });

  const setLonAndLink = (lon) => {
      setLon(lon)
  }



  return (
    <div className={`bg ${darkMode ? "bg-dark" : "bg-light"} para ${darkMode ? "para-dark" : "para-light"}`}>  
      <div><Nav /> </div>
      <div className='titleDate'>
        <h1>
          <span className="title">Weather</span>
        </h1>
        <DateTime />
      </div>
      <div>
      </div>
      <div>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
           
            <Route path="/" element={<SearchCoordinateInput setZipcode={setZipcodeInputAndLink}/>} />


            <Route path="/search" element={<Search />} />



            <Route path="/coordinates" element={<SearchCoordinate 
            zipcodeInput={zipcodeInput} 
            setLatitude={setLatAndLink} 
            setLongitude={setLonAndLink}/>} />

            <Route path="/weather" element=
            {<Weather lat={lat} lon={lon}/>} />

            <Route path="/geolocate" element={<Geolocate />} />
          </Routes>
      </div>
      </div>
  );
}

export default App;
