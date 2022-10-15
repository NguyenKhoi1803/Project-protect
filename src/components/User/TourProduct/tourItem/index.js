import {
  AimOutlined,
  CalendarOutlined,
  CarOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { details } from "../../../../store/user/fetchTour";


import "../tourItem/styles.scss";

function TourItem({ item }) {

  const navigate = useNavigate()

  const dispatch = useDispatch()


  const handleAddToCart = () => {
    console.log("item", item);
    dispatch(details(item))
    navigate('/cart')
  };

  return (
    <div className="container__tourItem">
      <img className="container__tourItem--img" src={item.img} />
      <div className="container__tourItem-details">
        <div className="container__tourItem-details1">
          <h4>{item.nameTour}</h4>
          <p>
            {" "}
            <AimOutlined /> <span> Nơi Khởi Hành</span> : {item.from}
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
        </div>
        <div className="container__tourItem-details2">
          <p>
            {" "}
            <DollarCircleOutlined /> <span>Gía 1 Người</span> :{" "}
            {item.price.adults}
          </p>
          <button className="addToCart" onClick={handleAddToCart}>
            Đặt Ngay
          </button>
        </div>
      </div>
    </div >
  );
}

export default TourItem;
