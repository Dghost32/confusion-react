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

let DishDetailPage = ({ dishes, comments }) => {
  /* Modal data */
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  /* getting dish and comments */
  let { dishId } = useParams();
  if (!dishes) return <div></div>;
  let dish = dishes.filter((dish) => dish.id === parseInt(dishId))[0];
  let commentsList = comments.filter(
    (comment) => comment.dishId === parseInt(dishId, 10)
  );

  return (
    <>
      <SubmitCommentModal show={showModal} toggle={toggleModal} />
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

let SubmitCommentModal = ({ show, toggle }) => {
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
    console.log("values", JSON.stringify(values));
  };

  return (
    <Modal isOpen={show} toggle={toggle}>
      <ModalHeader toggle={toggle}>
        <strong>Submit comment</strong>
      </ModalHeader>
      <ModalBody>
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
              model=".username"
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
              model=".username"
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
      </ModalBody>
    </Modal>
  );
};

export default DishDetailPage;
