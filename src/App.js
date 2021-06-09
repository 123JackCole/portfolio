import "./styles/App.css";
import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

// import NavBar from "./components/NavBar.js";
import Name from "./components/Name.js";
import About from "./containers/About";
import Projects from "./containers/Projects.js";
import Contact from "./containers/Contact.js";
import Pets from "./containers/Pets.js";

const App = () => {
  return (
    <>
    {/* maybe add in material ui for templating? */}
      <Container>
        <Name />
        <About />
        <Projects />
        <Contact />
        <Pets />
      </Container>
    </>
  );
};

export default App;
