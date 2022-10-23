import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTour } from "../../../store/user/fetchTour";
import { buttonFilterChange } from "../../../store/user/sortSlice";
import { generatePath, useNavigate } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../BodyHomePage/styles.scss";

import Slider from "react-slick";
import BodyItem from "./BodyItem-HomePage";
import GridExample from "../Special";
import Special from "../Special";

function BodyList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const newArr123 = useSelector((state) => state.fetchTourReducer.tours);

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

  const handleToDetails = (val) => {
    navigate(
      generatePath("/searchList/:id", {
        id: val,
      })
    );
  };

  return (
    <div className="container__body">
      <div className="container__body--List">
        <div className="container__body--Card">
          <div className="container__body--Header">
            <h2>Đà Nẵng</h2>
            <p className="space"></p>
            <button
              className="button button2"
              onClick={() => handleToDetails("Đà Nẵng")}
            >
              Chi Tiết
            </button>
          </div>
          <Slider {...settings}>{renderItem(1)}</Slider>
        </div>
        <div className="container__body--Card">
          <div className="container__body--Header">
            <h2>Hồ Chí Minh</h2>
            <p className="space"></p>
            <button
              className="button button2"
              onClick={() => handleToDetails("Hồ Chí Minh")}
            >
              Chi Tiết
            </button>
          </div>
          <Slider {...settings}>{renderItem(2)}</Slider>
        </div>
        <div className="container__body--Card">
          <div className="container__body--Header">
            <h2>Hà Nội</h2>
            <p className="space"></p>
            <button
              className="button button2"
              onClick={() => handleToDetails("Hà Nội")}
            >
              Chi Tiết
            </button>
          </div>
          <Slider {...settings}>{renderItem(3)}</Slider>
        </div>
      </div>
      <Special />
    </div>
  );
}
export default BodyList;
