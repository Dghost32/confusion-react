import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import ContactForm from "../ContactForm";
import ContactInfo from "../ContactInfo";

let ContactUsPage = ({ resetFeedbackForm, postFeedback }) => {
  return (
    <div className="container">
      <Breadcrumb className="row col-12">
        <Link className="breadcrumb-item" to="/">
          Home
        </Link>
        <Breadcrumb.Item active>Contact us</Breadcrumb.Item>
      </Breadcrumb>
      <div className="row col-12">
        <h3>Contact us</h3>
        <hr />
      </div>
      <ContactInfo />
      <ContactForm
        postFeedback={postFeedback}
        resetFeedbackForm={resetFeedbackForm}
      />
    </div>
  );
};

export default ContactUsPage;
