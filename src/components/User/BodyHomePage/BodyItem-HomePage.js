import React from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
// import { Card } from "antd";
import "../BodyHomePage/styles.scss";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function BodyItem({ item }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDetails = () => {
    navigate("/ListPage");
  };


  return (
    <div className="container__BodyItem">
      <div className="container__BodyItem--info">
        <img src={item.img} />
        <h1>{item.nameTour}</h1>
        <p>{item.price.adults}</p>
      </div>
    </div >
  );
}
export default BodyItem;


