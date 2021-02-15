import React, { useEffect } from "react";
import DishCard from "./DishCard";

let Menu = ({ dishes, callback }) => {
  useEffect(() => {
    console.log("menu component did mount");
  }, []);

  const menu = dishes.map((dish) => (
    <DishCard key={dish.id} dish={dish} callback={callback} />
  ));

  return <div className="row justify-content-center">{menu}</div>;
};

export default Menu;
