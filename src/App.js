import './App.css';
import { Route, Routes } from "react-router-dom";
import { useContext } from 'react';
import Home from './Home';
import Search from './Components/Search';
import Nav from './Components/Nav';
import Geolocate from './Components/Geolocate';

import { ThemeContext } from './Components/Theme/theme-context';

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className={`bg ${darkMode ? "bg-dark" : "bg-light"} para ${darkMode ? "para-dark" : "para-light"}`}>  
      <div><Nav /> </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/geolocate" element={<Geolocate />} />
          </Routes>


          
      </div>
  );
}

export default App;
