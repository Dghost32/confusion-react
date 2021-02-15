import React, { useState } from "react";
import Menu from "./Menu";
import DishDetail from "./DishDetail";
import { DISHES } from "../shared/dishes";
import { Navbar } from "react-bootstrap";

function Main() {
  let [selectedDish, setSelectedDish] = useState(undefined);

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
        {/* MENU - ROW */}
        <Menu callback={(dish) => setSelectedDish(dish)} dishes={DISHES} />
        {/* SELECTED DISH DETAILS - ROW */}
        <DishDetail dish={selectedDish} />
      </div>
    </div>
  );
}

export default Main;
