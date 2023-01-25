import React from "react";
import { Link } from "react-router-dom";
import potraitImage from "../assets/images/christian-carmona-potrait.jpg";
import { Container, Row, Col, Button} from "react-bootstrap";

const Home = () => {
  return (
    <Container className="landing-intro">
      <Row>
        <Col>
          <div className="landing-div">
            <Row>
            <h1>"Full Stack Web Developer: Building dynamic and responsive web applications that drive business growth"</h1>
            </Row>
            <p className="landing-statement">
              Feel free to contact me with any questions.
            </p>
            <Button className="nav-link-btn" variant="primary">
            <Link className="nav-link-btn" to="/contact">Contact Me</Link>
            </Button>
          </div>
        </Col>
        <Col>
          <img
            src={potraitImage}
            className="self-img"
            style={{}}
            alt="Portrait of Christian Carmona"
          ></img>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
