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
          <h3>{item.price.children}</h3>
          <span className="category">{item.details}</span>
        </div>
      </div>
    </div>
  );
}

export default BodyItem;