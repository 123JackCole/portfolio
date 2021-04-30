import "./styles/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar.js";
import ProjectCard from "./components/ProjectCard.js";

const App = () => {
  return (
    <div>
      <Router>
        <header>
          <NavBar />
        </header>
      </Router>
      {/* <ProjectCard /> */}
    </div>
  );
};

export default App;
