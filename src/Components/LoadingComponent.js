import React from "react";
import { Spinner } from "reactstrap";

export const LoadingComponent = () => (
  <div className="col-12 d-inline my-4">
    <Spinner color="primary" />
    <p>Loading...</p>
  </div>
);
