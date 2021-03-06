import React from "react";

const ContactInfo = () => (
  <>
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
          <a role="button" className="btn btn-primary" href="tel:+85212345678">
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
  </>
);

export default ContactInfo;
