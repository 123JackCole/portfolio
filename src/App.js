import "./styles/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar.js";

const App = () => {
  return (
    <div>
      <Router>
        <header>
          <NavBar />
        </header>
      </Router>
    </div>
  );
};

export default App;
