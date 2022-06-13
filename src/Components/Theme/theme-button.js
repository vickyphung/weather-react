import {ThemeContext} from './theme-context';
import React, { useContext } from "react";
import "../../App.css";


export default function SwitchButton() {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
  
    const onClick = () => {
      if (darkMode) {
        theme.dispatch({ type: "LIGHTMODE" });
      } else {
        theme.dispatch({ type: "DARKMODE" });
      }
    };
  
    return (
      <button className={`btn ${darkMode ? "btn-dark" : "btn-light"}`} onClick={onClick}>
        {darkMode ? "🌙 dark mode" : "🌞 light mode"}
      </button>
    );
  }