import React from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

import "../BodyHomePage/styles.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  BarcodeOutlined,
  CalendarOutlined,
  DollarCircleOutlined,
  QrcodeOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Card } from "antd";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Meta from "antd/lib/card/Meta";

function BodyItem({ item }) {
  return (
    <div className="CardItem">
      <div className="card">
        <div className="card-top">
          <img src={item.img} />
        </div>
        <div className="card-bottom">
          <h3>{item.nameTour}</h3>
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
