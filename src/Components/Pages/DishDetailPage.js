/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
import DishCard from "../DishCard";
import DishComments from "../DishComments";
import { Link, useParams } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  FormGroup,
  Label,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import { LoadingComponent } from "../LoadingComponent";

let DishDetailPage = ({ dishes, comments, postComment, isLoading, err }) => {
  /* Modal data */
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);
  /* getting dish and comments */
  let { dishId } = useParams();

  if (isLoading)
    return (
      <div className="container">
        <div className="row">
          <LoadingComponent />
        </div>
      </div>
    );

  if (err)
    return (
      <div className="container">
        <div className="row">
          <h4>{err}</h4>
        </div>
      </div>
    );

  if (!dishes) return <div></div>;

  let dish = dishes.filter((dish) => dish.id === parseInt(dishId))[0];
  let commentsList = comments.filter(
    (comment) => comment.dishId === parseInt(dishId, 10)
  );
  return (
    <>
      <SubmitCommentModal
        show={showModal}
        toggle={toggleModal}
        dishId={dish.id}
        postComment={postComment}
      />
      <DishDetailBreadcrumb name={dish.name} />
      <DishDetailBody
        dish={dish}
        comments={commentsList}
        toggle={toggleModal}
      />
    </>
  );
};

let DishDetailBreadcrumb = ({ name }) => (
  <div className="container">
    <Breadcrumb className="row col-12">
      <Link className="breadcrumb-item" to="/">
        Home
      </Link>
      <Link className="breadcrumb-item" to="/menu">
        Menu
      </Link>
      <BreadcrumbItem active>{name}</BreadcrumbItem>
    </Breadcrumb>
  </div>
);

let DishDetailBody = ({ dish, comments, toggle }) => {
  let { id, name } = dish;
  return (
    <div className="container">
      <div className="col-12">
        <h3>{name}</h3>
        <hr />
      </div>
      <div className="row justify-content-left" key={id}>
        <DishCard detailed key={id} dish={dish} />
        <DishComments comments={comments} toggle={toggle} />
      </div>
    </div>
  );
};

let SubmitCommentModal = ({ show, toggle, dishId, postComment }) => {
  return (
    <Modal isOpen={show} toggle={toggle}>
      <ModalHeader toggle={toggle}>
        <strong>Submit comment</strong>
      </ModalHeader>
      <ModalBody>
        <CommentForm
          dishId={dishId}
          postComment={postComment}
          toggle={toggle}
        />
      </ModalBody>
    </Modal>
  );
};

const CommentForm = ({ dishId, postComment, toggle }) => {
  /* form validations */
  const required = (val) => val && val.length;
  const maxLength = (len) => (val) => !val || val.length <= len;
  const minLength = (len) => (val) => val && val.length >= len;
  /* validates wheter or not the input name contains only alphabetic characters */
  const isName = (name) => {
    let regex = /^[a-zA-Z ]{0,300}$/;
    return regex.test(name);
  };
  /* form submit */
  const handleSubmit = (values) => {
    let { rating, author, comment } = values;
    postComment(dishId, rating, author, comment);
    toggle();
  };

  return (
    <>
      <LocalForm onSubmit={(values) => handleSubmit(values)}>
        <FormGroup>
          <Label>Rating</Label>
          <Control.select model=".rating" className="form-control">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Control.select>
        </FormGroup>
        <FormGroup>
          <Label>Your name</Label>
          <Control.text
            model=".author"
            placeholder="Your name"
            className="form-control"
            validators={{
              required,
              isName,
              minLength: minLength(2),
              maxLength: maxLength(15),
            }}
          />
          <Errors
            className="text-danger"
            model=".author"
            show="touched"
            messages={{
              required: "Required ",
              isName: "Name can only contain alphabetic characters ",
              minLength: "Must be greater than 2 characters ",
              maxLength: "Must be 15 characters or less ",
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label>Comment</Label>
          <Control.textarea
            model=".comment"
            rows={8}
            className="form-control"
          />
        </FormGroup>
        <Button color="primary">Submit</Button>
      </LocalForm>
    </>
  );
};

export default DishDetailPage;
