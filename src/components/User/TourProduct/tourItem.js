import {
  AimOutlined,
  CalendarOutlined,
  CarOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import React from "react";
import { Button } from "react-bootstrap";

import { generatePath, useNavigate } from "react-router-dom";

import "./styles.scss";

function TourItem({ item }) {
  const navigate = useNavigate();

  const handleToDetails = () => {
    navigate(`/tour/${item.id}`)
  };



  return (
    <div className="container__tourItem">
      <img className="container__tourItem--img" src={item.img} alt="" />

      <div className="container__tourItem-details">
        <div className="container__tourItem--info" >
          <h4>{item.nameTour}</h4>

          <p>
            {" "}
            <AimOutlined /> <span> Nơi Khởi Hành</span> : {item.from}
          </p>
          <p>
            <ClockCircleOutlined /> <span> Thời Gian </span> : {item.numberDay}{" "}
            Ngày
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
            <CalendarOutlined /> <span> Quantity </span> : {item.quantity}
          </p>
          <p>
            {" "}
            <span>Gía 1 Người</span> :{" "}
            {new Intl.NumberFormat("vi-EN", {
              style: "currency",
              currency: "VND",
            }).format(item.priceAdult)}
          </p>
        </div>

        <Button
          variant="success"
          className="addToCart"
          onClick={handleToDetails}
        >
          Chi Tiết
        </Button>
      </div>
    </div>
  );
}

export default TourItem;
