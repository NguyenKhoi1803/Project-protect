import React from "react";
import "./styles.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BarcodeOutlined, CalendarOutlined } from "@ant-design/icons";
import { generatePath, useNavigate } from "react-router-dom";

function BodyItem({ item }) {
  const navigate = useNavigate();

  const handleToItem = () => {
    navigate(`/tour/${item.id}`)
  };

  return (
    <div className="CardItem">
      <div className="card">
        <a className="card-top">
          <img src={item.img1} alt="" onClick={handleToItem} />
        </a>

        <div className="card-bottom">
          <div>
            <h3 onClick={handleToItem}>{item.nameTour}</h3>
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
            <p>
              {" "}
              <CalendarOutlined /> Giá người lớn: {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(item.priceAdult)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BodyItem;
