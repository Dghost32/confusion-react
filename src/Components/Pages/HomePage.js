import React from "react";
import { Card } from "react-bootstrap";
import { LoadingComponent } from "../LoadingComponent";
import { baseUrl } from "../../shared/baseUrl";
import { FadeTransform } from "react-animation-components";
let HomePage = ({
  dish,
  dishesLoading,
  dishesErr,
  promotion,
  promosLoading,
  promosErr,
  leader,
  leadersLoading,
  leadersErr,
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
          isLoading={leadersLoading}
          err={leadersErr}
        />
      </div>
    </div>
  );
};

const DetailsCard = ({ item, isLoading, err }) => {
  if (isLoading) return <LoadingComponent />;
  if (err) return <h4>{err}</h4>;
  return (
    <Card className="col-12 col-md m-1" style={{ width: "18rem" }}>
      <FadeTransform
        in
        transformProps={{ exitTransform: "scale(0.5) translateY(-50%)" }}
      >
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
      </FadeTransform>
    </Card>
  );
};

export default HomePage;
