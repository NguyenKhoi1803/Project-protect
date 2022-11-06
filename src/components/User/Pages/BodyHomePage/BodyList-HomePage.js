import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTour } from "../../../../store/user/fetchTour";

import { generatePath, useNavigate } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.scss";
import Slider from "react-slick";
import BodyItem from "./BodyItem-HomePage";
import Special from "../Special";
import Voucher from "../../../../layout/User/GetVoucher";
import Food from "../../../../layout/User/Food";
function BodyList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const newTourArr = useSelector((state) => state.fetchTourReducer.tours);

  useEffect(() => {
    dispatch(fetchTour());
  }, [dispatch]);

  const newArr123 = newTourArr?.filter(
    (item) => new Date(item.startDate).getTime() > new Date().getTime()
  );

  const newsArr = newArr123?.filter((item) => item.quantity > 0);

  const renderItem = (value) => {
    switch (value) {
      case 1:
        return newsArr
          ?.filter((item) => item.to === "Đà Nẵng")
          ?.map((item) => (
            <div key={item?.id}>
              <BodyItem item={item} />
            </div>
          ));
      case 2:
        return newsArr
          ?.filter((item) => item.to === "Hồ Chí Minh")
          ?.map((item) => (
            <div key={item?.id}>
              <BodyItem item={item} />
            </div>
          ));
      case 3:
        return newsArr
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
    adaptiveHeight: false,
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
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
            <a onClick={() => handleToDetails("Đà Nẵng")}> * Đà Nẵng</a>
          </div>
          <Slider {...settings}>{renderItem(1)}</Slider>
        </div>
      </div>
      <Special />
      <Food />
      <Voucher />
    </div>
  );
}
export default BodyList;
