import React from "react";
import { Card } from "react-bootstrap";

let DishCard = ({ dish, detailed }) => {
  let { name, image, description } = dish;
  return (
    <Card className="border-0 pt-2">
      <Card.Img variant="top" src={image}/>
      <Card.Body className="border-top">
        <Card.Title className="text-center">{name}</Card.Title>
        <Card.Text className={detailed? 'd-block': 'd-none'}>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default DishCard;
