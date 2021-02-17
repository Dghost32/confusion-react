import React from "react";
import { Card } from "react-bootstrap";

let DishCard = ({ dish, detailed, callback }) => {
  let { name, image, description } = dish;
  return (
    <Card onClick={callback ? () => callback(dish):undefined} className="col-12 col-md-5 m-1 pt-2">
      <Card.Img variant="top" src={image} />
      <Card.Body className="mt-2 border-top">
        <Card.Title className="text-center">{name}</Card.Title>
        <Card.Text className={detailed ? "d-block" : "d-none"}>
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default DishCard;
