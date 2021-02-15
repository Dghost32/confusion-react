import React from "react";
import DishCard from "./DishCard";

let DishDetail = ({ dish }) => {
  let { comments } = dish;

  let showComments = comments.map((c) => {
    let { id, comment, author, date } = c;

    return (
      <div  key={id}>
        <blockquote  className="blockquote m-2">
          <p className="mb-0">&gt;{comment}</p>
          <footer className="blockquote-footer mt-1">
            <cite title="Source Title">
              {author}, {date.substring(0, 10)}
            </cite>
          </footer>
        </blockquote>
      </div >
    );
  });

  return (
    <div className="row justify-content-center" key={dish.id}>
      <div className="col-12 col-md-5 m-1 border">
        <DishCard detailed key={dish.id} dish={dish} />
      </div>
      <div className="col-12 m-1 col-md-5 m-1 border">
        <h1 className="d-block">Comments</h1>
        {comments ? showComments : ""}
      </div>
    </div>
  );
};

export default DishDetail;
