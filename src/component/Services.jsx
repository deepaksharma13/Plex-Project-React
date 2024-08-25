import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Services() {
  return (
    <section className="serviceSec">
      <Row>
        <Col md={12}>
          <p>Services offered by this dealer</p>
        </Col>
        <Col md={12}>
          <div className="itemWrap">
            <div className="item bg-white d-flex flex-column align-items-center">
              <img
                src="https://cdn.tyreplex.net/images/wheel-alignment-bal.png?tr=w-100"
                alt="wheel-alignment"
              />
              <h5 className="my-3">Wheel Balancing</h5>
              <Button variant="success">Success</Button>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default Services;
