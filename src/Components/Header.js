import React from "react";
import { Navbar } from "react-bootstrap";

let Header = () => {
  return (
    <>
      <Navbar variant="dark">
        <div className="container-fluid">
          <Navbar.Brand>Ristorante con fusion</Navbar.Brand>
        </div>
      </Navbar>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Ristorante con Fusion</h1>
          <p class="lead">
            We take inspiration from the World's best cuisines, and create a
            unique fusion experience. Our lipsmacking creations will tickle your
            culinary senses!
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
