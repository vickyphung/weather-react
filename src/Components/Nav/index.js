import { Link } from "react-router-dom";

function Nav() {
  
  return (
    <div className="navBar">
      <p><Link to='/'>Home</Link></p>
      <p><Link to='/geolocate'>Geolocation</Link></p>
      <p><Link to='/search'>Weather</Link></p>   
    </div>
  );
}

export default Nav;