import React from "react";
import Menu from "../Menu";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

let MenuPage = ({ dishes }) => {
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb className="col-12">
          <Link className="breadcrumb-item" to="/">
            Home
          </Link>
          <Breadcrumb.Item active>Menu</Breadcrumb.Item>
        </Breadcrumb>
        <div className="col-12">
          <h3>Menu</h3>
          <hr />
        </div>
      </div>
      <Menu dishes={dishes} />
    </div>
  );
};

export default MenuPage;
