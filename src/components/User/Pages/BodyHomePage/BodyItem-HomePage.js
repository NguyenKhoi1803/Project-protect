import React from "react";
import "./styles.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BarcodeOutlined, CalendarOutlined } from "@ant-design/icons";
import { generatePath, useNavigate } from "react-router-dom";

function BodyItem({ item }) {
  const navigate = useNavigate();

  const handleProductItem = () => {
    navigate(
      generatePath("/products/details/:id", {
        id: item.id,
      })
    );
  };

  return (
    <div className="CardItem">
      <div className="card">
        <a className="card-top">
          <img src={item.img} alt="" onClick={handleProductItem} />
        </a>

        <div className="card-bottom">
          <h3>{item.nameTour}</h3>
          <p>
            {" "}
            <BarcodeOutlined /> Mã Tour : {item.codeTour}
          </p>
          <p>
            {" "}
            <CalendarOutlined /> Ngày Khời Hành : {item.startDate}{" "}
          </p>
          <p>
            {" "}
            <CalendarOutlined /> Ngày Về : {item.endDate}{" "}
          </p>
          <p>
            {" "}
            <CalendarOutlined /> Số Chỗ Còn Nhận: {item.quantity}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
export default BodyItem;
