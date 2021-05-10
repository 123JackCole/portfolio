import "./styles/App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import NavBar from "./components/NavBar.js";
import Name from "./components/Name.js";

const App = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <div>
              <Name />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
