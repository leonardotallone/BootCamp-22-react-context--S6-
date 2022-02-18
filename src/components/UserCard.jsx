/**
 * INFO: La clase "user_card" le da estilos a TODO el componente desde globals.scss
 *
 * Your code here !!!
 */
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import foto from "../assets/user.svg"
import unknown from "../assets/unknown.svg"

const UserCard = () => {
  const userContext = useContext(AuthContext)

  return (
  <>
    <div className="user_card">
      {userContext.isAuthenticated ? userContext.user.fullName: "Usuario Desconocido"}
    <img src={userContext.isAuthenticated ? foto : unknown} alt="foto de perfil"></img>
    </div>
  </>
  )
};

export default UserCard;
