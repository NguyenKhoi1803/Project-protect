import React from "react";
import "./styles.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BarcodeOutlined, CalendarOutlined } from "@ant-design/icons";

function BodyItem({ item }) {
  return (
    <div className="CardItem">
      <div className="card">
        <a href="/" className="card-top">
          <img src={item.img} />
        </a>
        <div className="card-bottom">
          <a href="#">
            <h3>{item.nameTour}</h3>
          </a>
          <p>
            {" "}
            <BarcodeOutlined /> Mã Tour : {item.id}
          </p>
          <p>
            {" "}
            <CalendarOutlined /> Ngày Khời Hành : {item.startDate}{" "}
          </p>
          <p>
            {" "}
            <CalendarOutlined /> Ngày Về : {item.endDate}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
export default BodyItem;
