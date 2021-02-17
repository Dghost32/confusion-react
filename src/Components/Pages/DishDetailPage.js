import React from "react";
import DishCard from "../DishCard";
import DishComments from "../DishComments";
import { Link, useParams } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";

let DishDetailPage = ({ dishes, comments }) => {
  let { dishId } = useParams();

  if (!dishes) return <div></div>;

  let dish = dishes.filter((dish) => dish.id === parseInt(dishId))[0];
  let commentsList = comments.filter(
    (comment) => comment.dishId === parseInt(dishId, 10)
  );

  let { id, name } = dish;

  return (
    <div className="container">
      <Breadcrumb className="row col-12">
        <Link className="breadcrumb-item" to="/">
          Home
        </Link>
        <Link className="breadcrumb-item" to="/menu">
          Menu
        </Link>
        <Breadcrumb.Item active>{name}</Breadcrumb.Item>
      </Breadcrumb>
      <div className="col-12">
        <h3>{name}</h3>
        <hr />
      </div>
      <div className="row justify-content-left" key={id}>
        <DishCard detailed key={id} dish={dish} />
        <DishComments comments={commentsList} />
      </div>
    </div>
  );
};

export default DishDetailPage;
