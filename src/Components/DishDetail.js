import React from "react";
import DishCard from "./DishCard";
import DishComments from "./DishComments";

let DishDetail = ({ dish }) => {
  if (!dish) return <div></div>;
  let { comments, id } = dish;

  return (
    <div className="row justify-content-left" key={id}>
      <DishCard detailed key={id} dish={dish} />
      <DishComments comments={comments? comments : []} />
    </div>
  );
};

export default DishDetail;
