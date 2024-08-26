import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <Row>
        <Col md={3}>
          <div className="d-flex flex-column">
            <img
              width="92"
              height="22"
              className="bg-white"
              src="https://cdn.tyreplex.net/themes/moonlight/images/TP-logo-mbl.png?tr=w-150,q-77&amp;v=512"
              alt="TyrePlex"
            />
            <ul className="list-unstyled d-inline-flex mt-3">
              <li className="me-2 button-pointers">
                <Link to="/">
                  <FaFacebookSquare style={{ width: "30px", height: "30px" }} />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FaInstagramSquare
                    style={{ width: "30px", height: "30px" }}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col md={9}>
          <Row>
            <Col md={4}>
              <ul className="flex-column mb-0 list-unstyled ">
                <li className="nav-item">
                  <Link to="/" className="footer-link  text-decoration-none">
                    Who We Are
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="footer-link text-decoration-none">
                    Are you a Tyre Dealer?
                  </Link>
                </li>
              </ul>
            </Col>
            <Col md={4}> <ul className="flex-column mb-0 list-unstyled ">
                <li className="nav-item">
                  <Link to="/" className="footer-link  text-decoration-none">
                    Term & condition
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="footer-link text-decoration-none">
                  Privacy Policy 
                  </Link>
                </li>
              </ul></Col>
            <Col md={4}> <ul className="flex-column mb-0 list-unstyled ">
                <li className="nav-item">
                  <Link to="/" className="footer-link  text-decoration-none">
                  Career 
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="footer-link text-decoration-none">
                  Shipping & Return Policy 
                  </Link>
                </li>
              </ul></Col>
          </Row>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
