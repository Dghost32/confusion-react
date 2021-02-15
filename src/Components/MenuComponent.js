import React, { useState, useEffect } from "react";
import MenuCard from "./MenuCard";

let Menu = ({ dishes }) => {
  const [selectedDish, setSelectedDish] = useState(null);

  useEffect(()=> {
    console.log('menu component did mount');
  }, [])

  let onDishSelect = (dish) => setSelectedDish(dish);

  let renderDish = (dish) => {
    if (dish === null) return <div></div>;
    return (
      <div className="col-12 col-md-6 border">
        <MenuCard key={dish.id} dish={dish} />
      </div>
    );
  };

  const menu = dishes.map((dish) => (
    <div key={dish.id} className="col-12 col-md-4 m-1 border" onClick={() => onDishSelect(dish)}>
      <MenuCard dish={dish} />
    </div>
  ));

  return (
    <div className="container">
      {/* menu row */}
      <div className="row justify-content-center">
        {/* menu list */}
        {menu}
      </div>
      <div className="row justify-content-center">
        {renderDish(selectedDish)}
      </div>
    </div>
  );
};

export default Menu;
