import React from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
// import { Card } from "antd";
import "../BodyHomePage/styles.scss";

function BodyItem({ item }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDetails = () => {
    navigate("/ListPage");
  };

  return (
    <div className="App">
      <div className="card">
        <div className="card-top">
          <img src={item.img} />
          <h2>{item.nameTour}</h2>
        </div>
        <div className="card-bottom">
          <p> Mã Tour {item.id}</p>
          <p> Ngày Khởi Hành : {item.rangepicker.startDate}</p>
          <p> Số Chỗ Còn Nhận : {item.number} </p>
        </div>
      </div>
    </div>
  );
}

export default BodyItem;
