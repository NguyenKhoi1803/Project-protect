import { uuidv4 } from "@antv/xflow-core";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/user/addToCartSlice";

function TourItem({ item }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ item: item, id: uuidv4 }));
    console.log("item", item);
  };

  return (
    <div>
      <div>
        <p>{item.nameTour}</p>
        <button onClick={handleAddToCart}>add to cart</button>
      </div>
    </div>
  );
}

export default TourItem;
