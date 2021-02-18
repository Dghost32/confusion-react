import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const ContactForm = () => {
  const userDataObj = {
    firstname: "",
    lastname: "",
    telnum: "",
    email: "",
    agree: false,
    contactType: "Tel.",
    message: "",
  };
  const [userData, setUserData] = useState(userDataObj);

  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    telnum: "",
    email: "",
  });
  const onSumbit = (e) => {
    e.preventDefault();
    document.getElementById("contact-form").reset();
  };

  const handleInputChange = (e) => {
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    let name = e.target.name;
    setUserData({ ...userData, [name]: value });
    validate(name);
  };

  let validate = (token) => {
    if (token === "firstname" || token === "lastname") {
      if (userData[token].length <= 2) {
        return setErrors({
          ...errors,
          [token]:
            token === "firstname"
              ? "First name should be >= than 3 characters"
              : "Last name should be >= than 3 characters",
        });
      } else if (userData[token].length > 9) {
        return setErrors({
          ...errors,
          [token]:
            token === "firstname"
              ? "First name should be <= than 10 characters"
              : "Last name should be <= than 10 characters",
        });
      } else {
        return setErrors({
          ...errors,
          [token]: "",
        });
      }
    }
    if (token === "telnum") {
      const regEx = /^\d+$/;
      if (!regEx.test(userData[token])) {
        return setErrors({
          ...errors,
          [token]: "Tel. number should contain only numbers",
        });
      } else
        return setErrors({
          ...errors,
          [token]: "",
        });
    }
    if (token === "email") {
      if (userData[token].split("").filter((x) => x === "@").length !== 1) {
        return setErrors({
          ...errors,
          [token]: "Email should contain a @",
        });
      } else
        return setErrors({
          ...errors,
          [token]: "",
        });
    }
  };
  return (
    <div className="row row-content">
      <h3 className="col-12">Send us your feedback</h3>
      <hr className="col-md-9" />
      <div className="col-12 col-md-9 ">
        <Form id="contact-form">
          {/* first name */}
          <Form.Group className="row align-items-center">
            <Form.Label htmlFor="firstname" className="col-md-2">
              First name
            </Form.Label>
            <Form.Control
              className="col-md-10 "
              type="text"
              id="firstname"
              name="firstname"
              placeholder="First name"
              isValid={errors.firstname === ""}
              isInvalid={errors.firstname !== ""}
              onChange={handleInputChange}
              value={userData.firstname}
            />
            <p
              className={`offset-2 text-muted ${
                errors.firstname === "" ? "d-none" : "d-block"
              }`}
            >
              {errors.firstname}
            </p>
          </Form.Group>
          {/* last name */}
          <Form.Group className="row align-items-center">
            <Form.Label htmlFor="lastname" className="col-md-2">
              Last Name
            </Form.Label>
            <Form.Control
              className={`col-md-10 `}
              isValid={errors.lastname === ""}
              isInvalid={errors.lastname !== ""}
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Last name"
              onChange={handleInputChange}
              value={userData.lastname}
            />
            <p
              className={`offset-2 text-muted ${
                errors.lastname === "" ? "d-none" : "d-block"
              }`}
            >
              {errors.lastname}
            </p>
          </Form.Group>
          {/* contact tel */}
          <Form.Group className="row align-items-center">
            <Form.Label htmlFor="telnum" className="col-md-2">
              Contact tel.
            </Form.Label>
            <Form.Control
              className="col-md-10"
              type="tel"
              id="telnum"
              name="telnum"
              placeholder="Contact tel."
              isValid={errors.telnum === ""}
              isInvalid={errors.telnum !== ""}
              onChange={handleInputChange}
              value={userData.telnum}
            />
            <p
              className={`offset-2 text-muted ${
                errors.telnum === "" ? "d-none" : "d-block"
              }`}
            >
              {errors.telnum}
            </p>
          </Form.Group>
          {/* email */}
          <Form.Group className="row align-items-center">
            <Form.Label htmlFor="email" className="col-md-2">
              Email
            </Form.Label>
            <Form.Control
              className="col-md-10"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              isValid={errors.email === ""}
              isInvalid={errors.email !== ""}
              onChange={handleInputChange}
              value={userData.email}
            />
            <p
              className={`offset-2 text-muted ${
                errors.email === "" ? "d-none" : "d-block"
              }`}
            >
              {errors.email}
            </p>
          </Form.Group>
          {/* checkbox and contact option */}
          <Form.Group className="row align-items-center justify-content-between">
            <Form.Check
              className="col-md-6 offset-md-2"
              type="checkbox"
              name="agree"
              label={<strong>May we contact you?</strong>}
              checked={userData.agree}
              onChange={handleInputChange}
            />

            <Form.Control
              className="col-md-2"
              as="select"
              name="contactType"
              onChange={handleInputChange}
              value={userData.contactType}
            >
              <option>Tel.</option>
              <option>Email</option>
            </Form.Control>
          </Form.Group>
          {/* textarea */}
          <Form.Group className="row">
            <Form.Label htmlFor="feedback" className="col-md-2">
              Your feedback
            </Form.Label>
            <Form.Control
              className="col-md-10"
              as="textarea"
              id="message"
              name="message"
              rows={12}
              onChange={handleInputChange}
              value={userData.message}
            />
          </Form.Group>
          {/* submit btn */}
          <Form.Group className="row">
            <Button
              className="col-md-auto offset-md-2 btn btn-primary"
              type="sumbit"
              onSubmit={onSumbit}
            >
              Send feedback
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
