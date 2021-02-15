import React from "react";
import { Card } from "react-bootstrap";

let MenuCard = ({ dish }) => {
  let { name, image, description } = dish;
  return (
    <Card className="border-0 pt-2">
      <Card.Img variant="top" src={image} />
      <Card.Body className="border-top">
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MenuCard;
