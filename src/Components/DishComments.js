import React from "react";

let DishComments = ({ comments }) => {
  let showComments = comments.map((c) => {
    let { id, comment, author, date } = c;
    return (
      <blockquote key={id} className="blockquote row m-2">
        <p className="mb-0">&gt;{comment}</p>
        <footer className="blockquote-footer mt-1">
          <cite title="Source Title">
            {author},{" "}
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            }).format(new Date(Date.parse(date)))}
          </cite>
        </footer>
      </blockquote>
    );
  });

  return (
    <div className="col-12 col-md-5 m-1">
      <h1 className="row">Comments</h1>
      {showComments}
    </div>
  );
};

export default DishComments;
