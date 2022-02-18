import UserCard from "../components/UserCard";
import ToggleTheme from "../components/ToggleTheme";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
const Home = () => {
  const screenContext = useContext(ThemeContext)

  const theme = {background:screenContext.theme.bg, color:screenContext.theme.syntax}
  return (
    <main className="home" style={theme}>
      <section className="section">
        <h1>React Context API</h1>
        <p>
          Para más información, consultá la documentación oficial:{" "}
          <a target="_blank" href=" https://reactjs.org/docs/context.html">
            Context API
          </a>
        </p>
      </section>

      <section className="section space_block">
        <ToggleTheme />
        <h3>Desde acá podés cambiar el tema de la app!</h3>
      </section>

      <section className="section space_block">
        <h1>Información del usuario</h1>
        <UserCard />
      </section>
    </main>
  );
};

export default Home;
