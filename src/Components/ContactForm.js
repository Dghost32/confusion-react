/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { Button, Form } from "react-bootstrap";
import { Control, Form as F, Errors, actions } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

const ContactForm = ({ resetFeedbackForm }) => {
  const handleSubmit = (values) => {
    console.log("values", JSON.stringify(values));
    resetFeedbackForm();
  };

  return (
    <div className="row row-content">
      <h3 className="col-12">Send us your feedback</h3>
      <hr className="col-md-9" />
      <div className="col-12 col-md-9 ">
        <F model="feedback" onSubmit={(values) => handleSubmit(values)}>
          {/* first name */}
          <div className="row form-group align-items-center">
            <Form.Label htmlFor="firstname" className="col-md-2">
              First name
            </Form.Label>
            <Control.text
              model=".firstname"
              id="firstname"
              name="firstname"
              className="col-md-10 form-control"
              placeholder="First name"
              validators={{
                required,
                minLength: minLength(3),
                maxLength: maxLength(15),
              }}
            />
            <Errors
              className="text-danger offset-md-2"
              model=".firstname"
              show="touched"
              messages={{
                required: "Required",
                minLength: "Must be greater than 2 characters",
                maxLength: "Must be 15 characters or less",
              }}
            />
          </div>
          {/* last name */}
          <div className="row form-group align-items-center">
            <Form.Label htmlFor="lastname" className="col-md-2">
              Last Name
            </Form.Label>
            <Control.text
              model=".lastname"
              id="lastname"
              name="lastname"
              className="col-md-10 form-control"
              placeholder="Last name"
              validators={{
                required,
                minLength: minLength(3),
                maxLength: maxLength(15),
              }}
            />
            <Errors
              className="text-danger offset-md-2"
              model=".lastname"
              show="touched"
              messages={{
                required: "Required",
                minLength: "Must be greater than 2 characters",
                maxLength: "Must be 15 characters or less",
              }}
            />
          </div>
          {/* contact tel */}
          <div className="row form-group align-items-center">
            <Form.Label htmlFor="telnum" className="col-md-2">
              Contact tel.
            </Form.Label>
            <Control.text
              model=".telnum"
              id="telnum"
              name="telnum"
              className="col-md-10 form-control"
              placeholder="Contact tel."
              validators={{
                required,
                minLength: minLength(3),
                maxLength: maxLength(15),
                isNumber,
              }}
            />
            <Errors
              className="text-danger offset-md-2"
              model=".telnum"
              show="touched"
              messages={{
                required: "Required",
                minLength: "Must be greater than 2 numbers",
                maxLength: "Must be 15 numbers or less",
                isNumber: "Must be a number",
              }}
            />
          </div>
          {/* email */}
          <div className="row form-group align-items-center">
            <Form.Label htmlFor="email" className="col-md-2">
              Email
            </Form.Label>
            <Control.text
              model=".email"
              className="col-md-10 form-control"
              type="email"
              name="email"
              placeholder="Email"
              validators={{
                required,
                validEmail,
              }}
            />
            <Errors
              className="text-danger offset-md-2"
              model=".email"
              show="touched"
              messages={{
                required: "Required",
                validEmail: "Invalid email address",
              }}
            />
          </div>
          {/* checkbox and contact option */}
          <div className="row form-group align-items-center justify-content-between">
            <div className="form-check col-md-6 offset-md-2">
              <Form.Label>
                <Control.checkbox
                  model=".agree"
                  name="agree"
                  className="form-check-input "
                />
                <strong>May we contact you?</strong>
              </Form.Label>
            </div>
            <Control.select
              model=".contactType"
              className="col-md-2 form-control"
              name="contactType"
            >
              <option>Tel.</option>
              <option>Email</option>
            </Control.select>
          </div>
          {/* textarea */}
          <div className="row form-group">
            <Form.Label htmlFor="feedback" className="col-md-2">
              Your feedback
            </Form.Label>
            <Control.textarea
              model=".message"
              id="message"
              name="message"
              className="col-md-10 form-control"
              rows={12}
            />
          </div>
          {/* submit btn */}
          <div className="row form-group">
            <Button
              className="col-md-auto offset-md-2 btn btn-primary"
              type="sumbit"
            >
              Send feedback
            </Button>
          </div>
        </F>
      </div>
    </div>
  );
};

export default ContactForm;
