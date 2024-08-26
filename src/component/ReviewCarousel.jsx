import React from "react";
import Slider from "react-slick";

const ReviewCarousel = ({ items, settings, title }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    margin:10,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className="carousel-container">
        {title && <h6 className="mb-3">{title}</h6>}
        <Slider {...settings}>
          {items.map((item, index) => (
            <div key={index} className="carousel-item ">
              <div className="car-margin border border-success p-3" style={{height: "200px"}}>
              <img
              className="d-block rounded w-25 mb-2"
              src={item.thumbnailUrl}
              alt={`Slide ${index}`}
            />
            
                {(item.title || item.albumId) && (
                  <>
                    {item.title && <p style={{fontSize:"15px", color:"#9A9A9A"}}>{item.title}</p>}
                    {item.albumId && <span><b>{item.albumId}</b></span>}
                  </>
                )}
            </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default ReviewCarousel;
