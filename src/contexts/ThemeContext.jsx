import { createContext, useState } from "react";
import themes from "../utils/themes"

const tema = localStorage.getItem('Theme') || 'light';
const initialStateDefault = {
    mode: tema, // esta propeidad solo deberia poder tener 2 valores: 'light' y 'dark'
    theme: themes[tema], // el set de temas actual
    toggleTheme: () => null, // esta función deberia togglear los temas
  };

export const ThemeContext = createContext(initialStateDefault)

const ThemeContextProvider = ({children}) => {
    const [screen, setScreen] = useState(initialStateDefault)

    const toggleTheme = () =>{
        screen.mode === 'light' ?
        setScreen({
            mode:'dark',
            theme: themes.dark
        }):
        setScreen({
            mode:'light',
            theme: themes.light
        });
        return screen.mode === 'light' ? 'dark':'light';
    }

    return <ThemeContext.Provider value={{...screen, toggleTheme}}>{children}</ThemeContext.Provider>
}

export default ThemeContextProvider;