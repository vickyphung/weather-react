import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './Home';
import Search from './Components/Search';
import Nav from './Components/Nav';
import Geolocate from './Components/Geolocate';

function App() {

  return (
    <div className="AppContainer">   
      <div><Nav /></div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/geolocate" element={<Geolocate />} />
          </Routes>
      </div>
  );
}

export default App;
