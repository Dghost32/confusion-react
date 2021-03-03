import React from "react";
import { Card } from "react-bootstrap";
import { LoadingComponent } from "../LoadingComponent";

const DetailsCard = ({ item, isLoading, err }) => {
  if (isLoading) return <LoadingComponent />;
  if (err) return <h4>{err}</h4>;
  
  return (
    <Card className="col-12 col-md m-1" style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        className="mt-1"
        src={item.image}
        alt={item.name}
      />
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

let HomePage = ({ dish, promotion, leader, isLoading, err }) => {
  console.log('dish', dish)
  return (
    <div className="container">
      <div className="row align-align-items-start">
        <DetailsCard item={dish} isLoading={isLoading} err={err} />
        <DetailsCard item={promotion} isLoading={isLoading} err={err} />
        <DetailsCard item={leader} isLoading={isLoading} err={err} />
      </div>
    </div>
  );
};

export default HomePage;
