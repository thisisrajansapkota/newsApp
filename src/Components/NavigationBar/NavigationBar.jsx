import React from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const NavigationBar = ({ setCategory }) => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link
              to="/technology"
              className="nav-link"
              onClick={() => setCategory("technology")}
            >
              Technology
            </Link>
            <Link
              to="/business"
              className="nav-link"
              onClick={() => setCategory("business")}
            >
              Business
            </Link>
            <Link
              to="/health"
              className="nav-link"
              onClick={() => setCategory("health")}
            >
              Health
            </Link>
            <Link
              to="/science"
              className="nav-link"
              onClick={() => setCategory("science")}
            >
              Science
            </Link>
            <Link
              to="/sports"
              className="nav-link"
              onClick={() => setCategory("sports")}
            >
              Sports
            </Link>
            <Link
              to="/entertainment"
              className="nav-link"
              onClick={() => setCategory("entertainment")}
            >
              Entertainment
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
