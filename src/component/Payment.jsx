import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MdOutlineCheck } from "react-icons/md";

function Payment() {
  return (
    <section className="paymentSec bg-white my-4 p-3">
      <Row>
        <Col sm={12}>
          <div className="d-flex flex-wrap">
            <p className="col-sm-6">
              <span className="me-2">
                <MdOutlineCheck className="text-info"/>
              </span>
              Deposit to Account
            </p>
            <p className="col-sm-6">
              <span className="me-2">
                <MdOutlineCheck className="text-info"/>
              </span>
              Net Banking
            </p>
            <p className="col-sm-6">
              <span className="me-2">
                <MdOutlineCheck className="text-info"/>
              </span>
              UPI
            </p>
            <p className="col-sm-6">
              <span className="me-2">
                <MdOutlineCheck className="text-info" />
              </span>
              Credit Card/Debit Card
            </p>
            <p className="col-sm-6">
              <span className="me-2">
                <MdOutlineCheck className="text-info"/>
              </span>
              Wallets (PayTM/PhonePe/Amazon etc.)
            </p>
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default Payment;
