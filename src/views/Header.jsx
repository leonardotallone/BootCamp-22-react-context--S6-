import getFakeUser from "../api/auth";
import {useContext} from "react"
import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";

const Header = () => {
  const screenContext = useContext(ThemeContext)
  const userAuth = useContext(AuthContext)

  const userName = getFakeUser();
  
  const loginUser = () => {
    userAuth.toggleAuth(userName);
    localStorage.setItem('User', JSON.stringify(userName))
  }

  const logoutUser = () => {
    userAuth.toggleAuth(null);
    localStorage.setItem('User', null)
  }
  const theme = {background:screenContext.theme.bg, color:screenContext.theme.syntax}
  return (
    <nav className="header" style={theme}>
      <div>Mensaje de bienvenida</div>

      <button onClick={userAuth.isAuthenticated ? logoutUser : loginUser} style={theme}>loguearse/desloguearse</button>
    </nav>
  );
};

export default Header;
