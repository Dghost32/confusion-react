import "./App.css";
import React from "react";
import Menu from "./Components/MenuComponent";
import { DISHES } from "./shared/dishes";
import { Navbar } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar bg="primary" variant="dark">
        <div className="container-fluid">
          <Navbar.Brand>Ristorante con fusion</Navbar.Brand>
        </div>
      </Navbar>

      {/* Body */}
      <div className="container">
        <div className="row">
          <Menu dishes={DISHES} />
        </div>
      </div>
    </div>
  );
}

export default App;
