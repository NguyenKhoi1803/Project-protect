import {
  AimOutlined,
  CalendarOutlined,
  CarOutlined,
  ClockCircleOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";
import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { generatePath, useNavigate } from "react-router-dom";

import "./styles.scss";

function TourItem({ item }) {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    navigate(
      generatePath("/products/:id", {
        id: item.id,
      })
    );
  };

  const dayStart = new Date(item.startDate).getTime();
  const dayEnd = new Date(item.endDate).getTime();
  const countDay = (dayEnd - dayStart) / 86400000;

  console.log("countDay", countDay);

  return (
    <div className="container__tourItem">
      <img className="container__tourItem--img" src={item.img} />
      <div className="container__tourItem-details">
        <h4>{item.nameTour}</h4>

        <p>
          {" "}
          <AimOutlined /> <span> Nơi Khởi Hành</span> : {item.from}
        </p>
        <p>
          <ClockCircleOutlined /> <span> Thời Gian </span> : {countDay} Ngày
        </p>
        <p>
          {" "}
          <AimOutlined /> <span>Nơi Đến</span> : {item.to}
        </p>

        <p>
          {" "}
          <CarOutlined /> <span>Phương tiện di chuyển</span> : {item.vehicle}
        </p>
        <p>
          {" "}
          <CalendarOutlined /> <span>Ngày Khởi Hành</span> : {item.startDate}
        </p>
        <p>
          {" "}
          <CalendarOutlined /> <span>Ngày Về</span> : {item.endDate}
        </p>
        <p>
          {" "}
          <span>Gía 1 Người</span> : {item.price}
        </p>

        <Button
          variant="success"
          className="addToCart"
          onClick={handleAddToCart}
        >
          Chi Tiết
        </Button>
      </div>
    </div>
  );
}

export default TourItem;
