import React, { useState, useEffect } from "react";
import DishCard from "./DishCard";
import DishDetail from "./DishDetail";

let Menu = ({ dishes }) => {
  const [selectedDish, setSelectedDish] = useState(null);

  useEffect(() => {
    console.log("menu component did mount");
  }, []);

  let onDishSelect = (dish) => setSelectedDish(dish);

  let renderDish = (dish) => {
    if (dish === null) return <div></div>;
    return <DishDetail key={dish.id} dish={dish} />;
  };

  const menu = dishes.map((dish) => (
    <div
      key={dish.id}
      className="col-12 col-md-5 m-1 border"
      onClick={() => onDishSelect(dish)}
    >
      <DishCard dish={dish} />
    </div>
  ));

  return (
    <div className="container">
      {/* menu row */}
      <div className="row justify-content-center">
        {/* menu list */}
        {menu}
      </div>
      {renderDish(selectedDish)}
    </div>
  );
};

export default Menu;
