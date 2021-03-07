import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { baseUrl } from "../shared/baseUrl";
import { FadeTransform } from "react-animation-components";

let DishCard = ({ dish, detailed }) => {
  let { name, image, description, id } = dish;
  return (
    <Link
      className="col-12 col-md-5 m-1 pt-2"
      style={{ textDecoration: "none", color: "inherit" }}
      to={`/menu/${id}`}
    >
      <Card>
        <FadeTransform
          in
          transformProps={{ exitTransform: "scale(0.5) translateY(-50%)" }}
        >
          <Card.Img variant="top" src={baseUrl + image} />
          <Card.Body className="mt-2 border-top">
            <Card.Title className="text-center">{name}</Card.Title>
            <Card.Text className={detailed ? "d-block" : "d-none"}>
              {description}
            </Card.Text>
          </Card.Body>
        </FadeTransform>
      </Card>
    </Link>
  );
};

export default DishCard;
