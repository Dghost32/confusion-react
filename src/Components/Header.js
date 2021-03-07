import React, { useState } from "react";
import { Navbar, Nav, Jumbotron, Modal, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { baseUrl } from '../shared/baseUrl';

let Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  let username;
  let password;
  let remember;

  const handleLogin = (e) => {
    e.preventDefault();
    toggleModal();
    console.log(
      "username: ",
      username.value,
      "password: ",
      password.value,
      "remember: ",
      remember.checked
    );
  };

  return (
    <>
      <Navbar className="navbar-dark align-items-center" expand="lg">
        <div className="container">
          <Link to="/">
            <Navbar.Brand>
              <img
                src={baseUrl+"images/logo.png"}
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
            <Nav className="ml-auto">
              <Nav.Item>
                <Button variant="outline-secondary" onClick={toggleModal}>
                  <i className="fas fa-sign-in-alt"></i>Login
                </Button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </div>
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
      <Modal show={isModalOpen} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleLogin}>
            <Form.Group>
              <Form.Label htmlFor="username">Username</Form.Label>
              <Form.Control
                ref={(input) => (username = input)}
                type="username"
                placeholder="Username"
                name="username"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                ref={(input) => (password = input)}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                ref={(input) => (remember = input)}
                type="checkbox"
                name="remember"
                label="Remember me"
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="btn btn-primary">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Header;
