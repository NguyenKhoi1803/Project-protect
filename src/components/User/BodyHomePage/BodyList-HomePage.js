import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTour } from "../../../store/user/fetchTour";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BodyItem from "./BodyItem-HomePage";
import "../BodyHomePage/styles.scss";
import { Button } from "reactstrap";
import { Carousel, Radio } from 'antd';

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
  return (
    <div className="container__renderItem">
      <div className="container__renderItem--List">
        <div className="container__renderItem--card">
          <h1>Đà Nẵng</h1>
          <Carousel dotPosition="left" autoplay>
            {renderItem(1)}
          </Carousel>
          <button>see details</button>
        </div>
        <div className="container__renderItem--card">
          <h1>Hồ Chí Minh</h1>
          <Carousel dotPosition="left" autoplay>
            {renderItem(2)}
          </Carousel>
          <button>see details</button>
        </div>
        <div className="container__renderItem--card">
          <h1>Hà Nội</h1>
          <Carousel dotPosition="left" autoplay>
            {renderItem(3)}
          </Carousel>
          <button>see details</button>
        </div>
      </div>

    </div>
  );
}
export default BodyList;
