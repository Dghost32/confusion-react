import React from "react";
import Menu from '../Menu';
import DishDetail from '../DishDetail';

let MenuPage = ({ dishes, selectedDish, callback }) => {
  return (
    <div className="container">
      <Menu dishes={dishes} callback={callback} />
      <DishDetail dish={selectedDish} />
    </div>
  );
};

export default MenuPage;
