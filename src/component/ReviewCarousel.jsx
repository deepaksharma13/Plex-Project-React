import React from "react";
import Slider from "react-slick";

const ReviewCarousel = ({ items, settings, title }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    margin: 10,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="carousel-container">
        {title && <h6 className="mb-3 para">{title}</h6>}
        <Slider {...settings}>
          {items.map((item, index) => (
            <div key={index} className="carousel-item ">
              <div
                className="car-margin border border-primary rounded p-3"
                style={{ height: "200px" }}
              >
                <img
                  className="d-block rounded  mb-2"
                  style={{maxWidth:"50px"}}
                  src={item.reviewerProfilePic}
                  alt={`Slide ${index}`}
                />
                <p style={{ fontSize: "15px"}}>
                  {item.reviewerName}
                </p>
                <span  className="ellips">
                  {item.reviewText}
                </span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default ReviewCarousel;
