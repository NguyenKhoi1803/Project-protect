import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTour } from "../../../store/user/fetchTour";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BodyItem from "./BodyItem-HomePage";
import "../BodyHomePage/styles.scss";
import { Button } from "reactstrap";

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
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div>
      <div className="renderItem123">
        <div className="renderItem123__heading">
          <h1>Đà Nẵng</h1>
          <Button color="success" className="renderItem123__heading--button">
            Xem Tất Cả
          </Button>
        </div>
        <Slider className="Carousel" {...settings}>
          {renderItem(1)}
        </Slider>
      </div>
      <div className="renderItem123">
        <div className="renderItem123__heading">
          <h1>Hồ Chí Minh</h1>
          <Button color="success" className="renderItem123__heading--button">
            Xem Tất Cả
          </Button>
        </div>
        <Slider className="Carousel" {...settings}>
          {renderItem(2)}
        </Slider>
      </div>
      <div className="renderItem123">
        <div className="renderItem123__heading">
          <h1>Hà Nội</h1>
          <Button color="success" className="renderItem123__heading--button">
            Xem Tất Cả
          </Button>
        </div>
        <Slider className="Carousel" {...settings}>
          {renderItem(3)}
        </Slider>
      </div>
    </div>
  );
}

export default BodyList;
