import React, { useState } from "react";
import { Card } from "react-bootstrap";

let Menu = ({ dishes }) => {
  const [selectedDish, setSelectedDish] = useState(null);

  let onDishSelect = (dish) => setSelectedDish(dish);

  let renderDish = (dish) => {
    if (dish === null) return <div></div>;
    let { id, name, image, description } = dish;
    return (
      <Card
        onClick={() => onDishSelect(dish)}
        key={id}
        className="col-11"
      >
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    );
  };

  const menu = dishes.map((dish) => {
    let { id, name, image, description } = dish;

    return (
      <Card
        onClick={() => onDishSelect(dish)}
        key={id}
        className="col-12 col-md-5 m-1"
      >
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    );
  });

  return (
    <div className="container">
      {/* menu row */}
      <div className="row">
        {/* menu list */}
        {menu}
      </div>
      <div className="row">
        {renderDish(selectedDish)}
      </div>
    </div>
  );
};

export default Menu;
