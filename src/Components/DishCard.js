import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
let DishCard = ({ dish, detailed }) => {
  let { name, image, description, id } = dish;
  return (
    <Link
      className="col-12 col-md-5 m-1 pt-2"
      style={{ textDecoration: "none", color: "inherit" }}
      to={`/menu/${id}`}
    >
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body className="mt-2 border-top">
          <Card.Title className="text-center">{name}</Card.Title>
          <Card.Text className={detailed ? "d-block" : "d-none"}>
            {description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default DishCard;
