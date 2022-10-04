import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTour } from "../../../store/user/fetchTour";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BodyItem from "./BodyItem-HomePage";
import "../BodyHomePage/styles.scss";

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
    dots: true,
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
  return (
    <div>
      <div className="renderItem123">
        <h1>Tour Da Nang</h1>
        <Slider className="Carousel" {...settings}>
          {renderItem(1)}
        </Slider>
      </div>
    </div>
  );
}

export default BodyList;
