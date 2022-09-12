import { Link } from "react-router-dom";
import ThemedButton from '../Theme/theme-button'
import { ThemeContext } from '../Theme/theme-context';
import {useContext} from 'react'
function Nav() {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className={`bg ${darkMode ? "bg-dark" : "bg-light"} para ${darkMode ? "para-dark" : "para-light"}`}>  
    <div className="navBar">
      <p><Link className={`btn ${darkMode ? "btn-dark" : "btn-light"}`} to='/'>weather</Link></p>
      <p><Link className={`btn ${darkMode ? "btn-dark" : "btn-light"}`} to='/geolocate'>geolocate</Link></p>
      <ThemedButton />
    </div>
    </div>
  );
}

export default Nav;