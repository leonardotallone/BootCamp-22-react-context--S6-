import Home from "./Home";
import Header from "./Header";
import AuthContextProvider from "../contexts/AuthContext.jsx"
import ThemeContextProvider from "../contexts/ThemeContext";

/**
 * Acá deberas agregar los contexts providers creados (AuthContext y ThemeContext) para que sean accesibles en todo el árbol de componentes
 */

const App = () => {
  return (
    <ThemeContextProvider>
    <AuthContextProvider>
      <Header />
      <Home />
    </AuthContextProvider>
    </ThemeContextProvider>
  );
};

export default App;
