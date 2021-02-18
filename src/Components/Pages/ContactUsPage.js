import React, { useState } from "react";
import { Breadcrumb, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

let ContactUsPage = () => {
  const userDataObj = {
    firstName: "",
    lastName: "",
    telnum: "",
    email: "",
    agree: false,
    contactType: "Tel.",
    message: "",
  };
  const [userData, setUserData] = useState(userDataObj);

  const handleInputChange = (e) => {
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    let name = e.target.name;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("current state is", JSON.stringify(userData));
    console.log("submit");
    setUserData(userDataObj);
  };

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb className="col-12">
          <Link className="breadcrumb-item" to="/">
            Home
          </Link>
          <Breadcrumb.Item active>Contact us</Breadcrumb.Item>
        </Breadcrumb>
        <div className="col-12">
          <h3>Contact us</h3>
          <hr />
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12">
          <h3>Location Information</h3>
        </div>
        <div className="col-12 col-sm-4 offset-sm-1">
          <h5>Our Address</h5>
          <address>
            121, Clear Water Bay Road
            <br />
            Clear Water Bay, Kowloon
            <br />
            HONG KONG
            <br />
            <i className="fas fa-phone"></i>: +852 1234 5678
            <br />
            <i className="fas fa-fax"></i>: +852 8765 4321
            <br />
            <i className="fas fa-envelope"></i>:{" "}
            <a href="mailto:confusion@food.net">confusion@food.net</a>
          </address>
        </div>
        <div className="col-12 col-sm-6 offset-sm-1">
          <h5>Map of our Location</h5>
        </div>
        <div className="col-12 col-sm-11 offset-sm-1">
          <div className="btn-group" role="group">
            <a
              role="button"
              className="btn btn-primary"
              href="tel:+85212345678"
            >
              <i className="fas fa-phone"></i> Call
            </a>
            <button className="btn btn-info">
              <i className="fab fa-skype"></i> Skype
            </button>
            <a
              role="button"
              className="btn btn-success"
              href="mailto:confusion@food.net"
            >
              <i className="fas fa-envelope"></i> Email
            </a>
          </div>
        </div>
      </div>
      <div className="row row-content">
        <h3 className="col-12">Send us your feedback</h3>
        <hr className="col-md-9" />
        <div className="col-12 col-md-9 ">
          <Form onSubmit={handleSubmit} id="contact-form">
            {/* first name */}
            <Form.Group className="row align-items-center">
              <Form.Label htmlFor="firstname" className="col-md-2">
                First name
              </Form.Label>
              <Form.Control
                className="col-md-10"
                type="text"
                id="firstname"
                name="firstName"
                placeholder="First name"
                onChange={handleInputChange}
                value={userData.firstName}
              />
            </Form.Group>
            {/* last name */}
            <Form.Group className="row align-items-center">
              <Form.Label htmlFor="lastname" className="col-md-2">
                Last Name
              </Form.Label>
              <Form.Control
                className="col-md-10"
                type="text"
                id="lastname"
                name="lastName"
                placeholder="Last name"
                onChange={handleInputChange}
                value={userData.lastName}
              />
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
                onChange={handleInputChange}
                value={userData.telnum}
              />
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
                onChange={handleInputChange}
                value={userData.email}
              />
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
              >
                Send feedback
              </Button>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
