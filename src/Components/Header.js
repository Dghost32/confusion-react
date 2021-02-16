import React from "react";
import { Navbar, Nav, Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";

let Header = () => {
  return (
    <>
      <Navbar className="navbar-dark align-items-center" expand="lg">
        <Link to="/">
          <Navbar.Brand>
            <img
              src="assets/images/logo.png"
              alt="logo"
              height="30"
              width="41  "
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-2" />
        <Navbar.Collapse id="basic-navbar-nav" className="ml-2">
          <Nav className="me-auto d-flex right-0">
            <Link to="/" className="nav-link">
              <i className="fas fa-home"></i> Home
            </Link>
            <Link className="nav-link" to="/aboutus">
              <span className="fa fa-info fa-lg"></span> About Us
            </Link>
            <Link to="/menu" className="nav-link">
              <i className="fas fa-list"></i> Menu
            </Link>
            <Link className="nav-link" to="/contactus">
              <span className="fa fa-address-card fa-lg"></span> Contact Us
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Jumbotron className="rounded-0">
        <div className="container">
          <h1 className="display-4">Ristorante con Fusion</h1>
          <p className="lead">
            We take inspiration from the World's best cuisines, and create a
            unique fusion experience. Our lipsmacking creations will tickle your
            culinary senses!
          </p>
        </div>
      </Jumbotron>
    </>
  );
};

export default Header;
