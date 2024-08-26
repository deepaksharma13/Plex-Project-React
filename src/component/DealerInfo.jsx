import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { RiVerifiedBadgeLine } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { LuMapPin } from "react-icons/lu";
import { BsClock } from "react-icons/bs";
import ReviewCarousel from "./ReviewCarousel";
import {items} from '../utilis/reviewData'

function DealerInfo() {
  const [carouselItems, setCarouselItems] = useState([]);

  useEffect(() => {
      setCarouselItems(items);
  }, []);
    // Define slick settings
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };
  return (
    <div className="delearWrap">
      <Row>
        <Col xxl={5}>
          <div className="d-sm-flex">
            <h2 className="head2">SHREE HEMKUNT TYRES AND SERVICES</h2>
            <span className="d-flex align-items-center verifyWrap">
              <RiVerifiedBadgeLine />
              Verified
            </span>
          </div>
          <div className="d-sm-flex align-items-baseline ratingWrap">
            <span className="ratingNumber-bg me-2">4.9</span>
            <ul className="pl-0 d-inline-flex">
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
            </ul>
            <span className="reviewTxt">1111 Reviews</span>
            <Button
              size="sm"
              type="button"
              variant="outline-secondary"
              className="btn px-2 d-inline-flex rate-btn"
            >
              Rate
            </Button>
          </div>
          <Row>
            <Col sm={12}>
              <div className="d-flex" style={{color: "#045594"}}>
                <span>
                  <LuMapPin />
                </span>
                <p className="ms-2" style={{ fontSize: "14px"}}>
                  Coworking, MGF Metropolis Mall, UGF, TyrePlex - India
                  Accelerator, Mehrauli-Gurgaon Rd, Gurugram, Haryana 122003
                </p>
              </div>
            </Col>
            <Col sm={12}>
              <div className="d-flex" style={{color: "#045594"}}>
                <span>
                  <BsClock />
                </span>
                <p className="ms-2" style={{ fontSize: "14px" }}>
                  Open - Monday to Sunday - 10:00AM to 8:00PM
                </p>{" "}
              </div>{" "}
            </Col>
            <Col sm={12} className="mb-4">
              {" "}
              <Button variant="outline-danger"> Get Directions </Button>
            </Col>
          </Row>
        </Col>
        <Col xxl={7}>
          <div className=" delearImgWrap">
            <div className="d-md-flex">
              <img
                className="rounded"
                src="https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300"
                alt="gallery-img"
              />
              <img
                className="rounded"
                src="https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300"
                alt="gallery-img"
              />
            </div>
          </div>
        </Col>
      </Row>
      <Row>   <Col sm={12}>
          {carouselItems.length > 0 ? (
        <ReviewCarousel items={carouselItems} settings={settings} title="My Review" />
      ) : (
        <p>Loading...</p>
      )}
          {/* <CarouselComp/> */}
        </Col></Row>
    </div>
  );
}

export default DealerInfo;
