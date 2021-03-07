import React from "react";
import { Card } from "react-bootstrap";
import { LoadingComponent } from "../LoadingComponent";
import { baseUrl } from "../../shared/baseUrl";

const DetailsCard = ({ item, isLoading, err }) => {
  if (isLoading) return <LoadingComponent />;
  if (err) return <h4>{err}</h4>;

  return (
    <Card className="col-12 col-md m-1" style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        className="mt-1"
        src={baseUrl + item.image}
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

let HomePage = ({
  dish,
  promotion,
  leader,
  dishesLoading,
  dishesErr,
  promosLoading,
  promosErr,
  commentsLoading,
  commentsErr,
}) => {
  return (
    <div className="container">
      <div className="row align-align-items-start">
        <DetailsCard item={dish} isLoading={dishesLoading} err={dishesErr} />
        <DetailsCard
          item={promotion}
          isLoading={promosLoading}
          err={promosErr}
        />
        <DetailsCard
          item={leader}
          isLoading={commentsLoading}
          err={commentsErr}
        />
      </div>
    </div>
  );
};

export default HomePage;
