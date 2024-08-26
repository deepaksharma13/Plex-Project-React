import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Services() {
  return (
    <section className="serviceSec bg-white ">
      <Row>
        <Col md={12}>
          <p>Services offered by this dealer</p>
        </Col>
        <Col md={12}>
          <div className="itemWrap">
            <div className="item p-3 d-flex flex-column align-items-center">
              <img
                src="https://cdn.tyreplex.net/images/wheel-alignment-bal.png?tr=w-100"
                alt="wheel-alignment"
              />
              <h6 className="my-3">Wheel Balancing</h6>
              <Button variant="outline-danger">Book now</Button>
            </div>
            <div className="item p-3 d-flex flex-column align-items-center">
              <img
                src="https://cdn.tyreplex.net/images/wheel-alignment.png?tr=w-100"
                alt="Wheel Alignment"
              />
              <h6 className="my-3">Wheel Alignment</h6>
              <Button variant="outline-danger">Book now</Button>
            </div>
            <div className="item p-3 d-flex flex-column align-items-center">
              <img
                src="https://cdn.tyreplex.net/images/wheel-alignment-bal.png?tr=w-100"
                alt="wheel-alignment"
              />
              <h6 className="my-3">Wheel Balancing</h6>
              <Button variant="outline-danger">Book now</Button>
            </div>
            <div className="item p-3 d-flex flex-column align-items-center">
              <img
                src="https://cdn.tyreplex.net/images/wheel-alignment.png?tr=w-100"
                alt="Wheel Alignment"
              />
              <h6 className="my-3">Wheel Alignment</h6>
              <Button variant="outline-danger">Book now</Button>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default Services;
