import "./Navbar.css";
import LogIn from "../LogIn/LogIn";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavScrollExample() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand>Shop Online!</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="/" className="link">
              Home
            </Link>

            <Link to="/cart" className="link">
              Cart
            </Link>
            <Link to="/contact" className="link">
              Contact Us
            </Link>
          </Nav>
          <Nav.Link className="d-flex" href="#action1">
            <LogIn />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
