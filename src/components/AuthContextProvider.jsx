import {useState, useEffect} from "react"

function AuthContextProvider({children}){
    const [userAuth, setUserAuth] = useState({
        user: null, 
        isAuthenticated: false, 
        toggleAuth: () => null,
      })

      useEffect(()=>{
          setUserAuth(children)
      }, [])
}

export default  AuthContextProvider;

