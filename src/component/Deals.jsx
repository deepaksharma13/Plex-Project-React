import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import {deal_API} from '../utilis/api'

function Deals() {
  const [carouselItems, setCarouselItems] = useState([]);
  useEffect(() => {
    // fetching data from an API
    const fetchData = async () => {
      //  API call
      const response = await fetch(`${deal_API}`);
      const data = await response.json();

      setCarouselItems(data);
    };

    fetchData();
  }, []);
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
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <div className="dealSec bg-white">
      <p className="para">Deals in</p>
      <Slider {...settings}>
        {carouselItems.map((item, index) => (
          <div key={index} className="carousel-item ">
            <div className="car-margin border">
              <img
                className="d-block  w-100 mb-2"
                style={{ height: "240px" }}
                src={item.download_url}
                alt={`Slide ${index}`}
              />
              <p
                style={{
                  fontSize: "15px",
                  textAlign: "center",
                }}
              >
                {item.author}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Deals;
