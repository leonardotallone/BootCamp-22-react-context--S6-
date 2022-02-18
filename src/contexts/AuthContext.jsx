import { createContext, useState } from "react";
console.log(localStorage.getItem('User'))
const user = JSON.parse(localStorage.getItem('User')) || null;

const authContextDefaultValues = {
    user: user,
    isAuthenticated: !!user,
    toggleAuth: () => null,
  };

export const AuthContext = createContext(authContextDefaultValues);

const AuthContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(authContextDefaultValues);
  
    const toggleAuth = (user) =>{
        setIsLoggedIn({
        user: user,
        isAuthenticated: !isLoggedIn.isAuthenticated,
      });
      return user;
    }
  
    return <AuthContext.Provider value={{...isLoggedIn, toggleAuth}}>{children}</AuthContext.Provider>
  };

  export default AuthContextProvider;