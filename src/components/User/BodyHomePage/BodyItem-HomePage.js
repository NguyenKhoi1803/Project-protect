import React from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

import "../BodyHomePage/styles.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  CalendarOutlined,
  DollarCircleOutlined,
  QrcodeOutlined,
  UserOutlined,
} from "@ant-design/icons";

function BodyItem({ item }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDetails = () => {
    navigate("/ListPage");
  };

  return (
    <div className="container__BodyItem">
      <img src={item.img} />
      <div className="container__BodyItem--info">
        <p>
          <QrcodeOutlined
            style={{
              fontSize: "22px",
              verticalAlign: "unset",
            }}
          />
          Mã Tour : {item.id}
        </p>

        <p>
          <CalendarOutlined
            style={{
              fontSize: "22px",
              verticalAlign: "unset",
            }}
          />
          Ngày Khởi Hành : {item.startDate}
        </p>
        <p>
          {" "}
          <UserOutlined /> Số Chố Còn Nhận : {item.number}
        </p>

        <h3 className="price">
          {" "}
          <DollarCircleOutlined /> {item.price.adults}{" "}
        </h3>
      </div>
    </div>
  );
}
export default BodyItem;
