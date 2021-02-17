import React, { useEffect } from "react";
import DishCard from "./DishCard";

let Menu = ({ dishes }) => {
  useEffect(() => {
    console.log("menu component did mount");
  }, []);

  const menu = dishes.map((dish) => <DishCard key={dish.id} dish={dish} />);

  return <div className="row justify-content-left">{menu}</div>;
};

export default Menu;
