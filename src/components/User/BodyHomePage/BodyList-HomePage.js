import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTour } from "../../../store/user/fetchTour";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BodyItem from "./BodyItem-HomePage";
import "../BodyHomePage/styles.scss";
import { Carousel, Radio } from "antd";
import Button from "react-bootstrap/Button";
import Slider from "react-slick";

function BodyList() {
  const dispatch = useDispatch();
  const newArr123 = useSelector((state) => state.fetchTourReducer.tours);

  console.log("123", newArr123);
  useEffect(() => {
    dispatch(fetchTour());
  }, [dispatch]);

  const renderItem = (value) => {
    switch (value) {
      case 1:
        return newArr123
          ?.filter((item) => item.to === "Đà Nẵng")
          ?.map((item) => (
            <div key={item?.id}>
              <BodyItem item={item} />
            </div>
          ));
      case 2:
        return newArr123
          ?.filter((item) => item.to === "Hồ Chí Minh")
          ?.map((item) => (
            <div key={item?.id}>
              <BodyItem item={item} />
            </div>
          ));
      case 3:
        return newArr123
          ?.filter((item) => item.to === "Hà Nội")
          ?.map((item) => (
            <div key={item?.id}>
              <BodyItem item={item} />
            </div>
          ));

      default:
    }
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
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

  const handleToDetails = ((val) => console.log("aaaaa", val))

  return (
    <div className="container__body">
      <div className="container__body--List">
        <div className="container__body--Card">
          <div className="container__body--Header">
            <h1>Đà Nẵng</h1>
            <p className="space"></p>
            <button class="button button2" onClick={() => handleToDetails("Đà Nẵng")}>Chi Tiết</button>
          </div>
          <Slider {...settings}>{renderItem(1)}</Slider>
        </div>
        <div className="container__body--Card">
          <div className="container__body--Header">
            <h1>Hồ Chí Minh</h1>
            <p className="space"></p>
            <button class="button button2" onClick={() => handleToDetails("Hồ Chí Minh")}>Chi Tiết</button>
          </div>
          <Slider {...settings}>{renderItem(2)}</Slider>
        </div>
        <div className="container__body--Card">
          <div className="container__body--Header">
            <h1>Hà Nội</h1>
            <p className="space"></p>
            <button class="button button2" onClick={() => handleToDetails("Hà Nội")}>Chi Tiết</button>
          </div>
          <Slider {...settings}>{renderItem(3)}</Slider>
        </div>
      </div>
    </div>
  );
}
export default BodyList;
