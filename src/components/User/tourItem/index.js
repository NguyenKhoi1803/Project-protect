import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/user/addToCartSlice";
import "../tourItem/styles.scss";
// import { Card, Carousel } from "antd";

function TourItem({ item }) {
  const dispatch = useDispatch();

  const id = new Date().getTime();
  const handleAddToCart = () => {
    dispatch(addToCart({ ...item, id: id }));
    console.log("item", item);
  };

  return (
    <div className="container__tourItem">
      <div className="container__tourItem-details"><p>{item.nameTour}</p></div>
    </div>
  );
}

export default TourItem;
