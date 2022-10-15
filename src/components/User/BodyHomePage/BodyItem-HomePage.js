import React from "react";


import "../BodyHomePage/styles.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  BarcodeOutlined,
  CalendarOutlined,

} from "@ant-design/icons";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
