import { FaSun } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import "./App.css";
import Resume from "./Resume";
import "./Resume.css";

function App() {
  const body = document.body;
  let icon = <FaSun />;

  const changeTheme = () => {
    console.log("hi");
    if (body.classList.contains("dark")) {
      body.classList.toggle("light");
      icon = <MdDarkMode />;
      console.log(icon);
    } else {
      body.classList.toggle("dark");
      icon = <FaSun />;
      console.log(icon);
    }
  };

  return (
    <div>
      <button onClick={changeTheme}>{icon}</button>
      <Resume></Resume>
    </div>
  );
}

export default App;
