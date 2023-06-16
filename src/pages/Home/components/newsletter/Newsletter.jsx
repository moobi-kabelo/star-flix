import React from "react";
import { Button, Form } from "react-bootstrap";

const Newsletter = () => {
  return (
    <section className="cta">
      <div className="container">
        <div className="title-wrapper">
          <h2 className="cta-title">Trial start first 30 days.</h2>

          <p className="cta-text">
            Enter your email to create or restart your membership.
          </p>
        </div>

        <Form action="" className="cta-form">
          <Form.Control
            type="email"
            name="email"
            required
            placeholder="Enter your email..."
            className="email-field"
          />

          <Button type="submit" className="cta-form-btn">
            Submit
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default Newsletter;
