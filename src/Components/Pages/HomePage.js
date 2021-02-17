import React from "react";
import { Card } from "react-bootstrap";

const DetailsCard = ({ item }) => {
  return (
    <Card
      className="col-12 col-md m-1"
      style={{ width: "18rem" }}
    >
      <Card.Img variant="top" className="mt-1" src={item.image} alt={item.name} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        {item.designation ? (
          <Card.Subtitle>{item.designation}</Card.Subtitle>
        ) : undefined}
        <Card.Text>{item.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

let Home = ({ dish, promotion, leader }) => {
  return (
    <div className="container">
      <div className="row align-align-items-start">
        <DetailsCard item={dish} />
        <DetailsCard item={promotion} /> 
        <DetailsCard item={leader} />
      </div>
    </div>
  );
};

export default Home;
