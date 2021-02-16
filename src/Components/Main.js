import React, { useState } from "react";
import Menu from "./Menu";
import Header from './Header'
import Footer from './Footer'
import DishDetail from "./DishDetail";
import { DISHES } from "../shared/dishes";

function Main() {
  let [selectedDish, setSelectedDish] = useState(undefined);

  return (
    <div className="App">
      <Header/>

      <div className="container">
        {/* MENU - ROW */}
        <Menu callback={(dish) => setSelectedDish(dish)} dishes={DISHES} />
        {/* SELECTED DISH DETAILS - ROW */}
        <DishDetail dish={selectedDish} />
      </div>

      <Footer/>
    </div>
  );
}

export default Main;
