import React from "react";
import DishCard from "./DishCard";
import { LoadingComponent } from "./LoadingComponent";

let Menu = ({ dishes }) => {
  if (dishes.isLoading)
    return (
      <div className="container">
        <div className="row">
          <LoadingComponent />
        </div>
      </div>
    );

  if (dishes.err)
    return (
      <div className="container">
        <div className="row">
          <h4>{dishes.err}</h4>
        </div>
      </div>
    );

  console.log('dishes', dishes)

  const menu = dishes.dishes.map((dish) => (
    <DishCard key={dish.id} dish={dish} />
  ));

  return <div className="row justify-content-left">{menu}</div>;
};

export default Menu;
