/**
 * INFO: La clase "toggleBtn" le da estilos al botón desde globals.scss
 *
 * Your code here !!!
 */
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ToggleTheme = () => {
  const screenContext = useContext(ThemeContext);
  const content = screenContext.mode === 'light' ? 'Dark Mode' : 'Light Mode'
  return <button className="toggleBtn" onClick={()=>{
    localStorage.setItem('Theme',screenContext.toggleTheme())
  }}>{content}</button>;
};

export default ToggleTheme;
