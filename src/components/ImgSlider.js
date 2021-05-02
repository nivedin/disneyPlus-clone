import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImgSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="/images/slider-badging.jpg" alt="carousel-img" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-badag.jpg" alt="carousel-img" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-scale.jpg" alt="carousel-img" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-scales.jpg" alt="carousel-img" />
      </Wrap>
    </Carousel>
  );
}

export default ImgSlider;

const Carousel = styled(Slider)`
  margin-top: 20px;
  .slick-list {
    overflow: visible;
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: #fff;
    }
  }
  li.slick-active button:before {
    color: white;
  }

  button {
    z-index: 1;
  }
`;
const Wrap = styled.div`
  cursor: pointer;
  img {
    border: 4px solid transparent;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 0.3s ease-in-out;

    &:hover {
      border: 4px solid #ffffff95;
    }
  }
`;
