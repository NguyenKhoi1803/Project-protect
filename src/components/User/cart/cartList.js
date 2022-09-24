import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../../../store/user/addToCartSlice";

import CartItem from "./cartItem";

function CartList() {
  const dispatch = useDispatch();
  const newCartArr = useSelector((state) => state.fetchTourReducer.tours);

  console.log("newCartArr", newCartArr);
  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const renderItem = () => {
    return newCartArr?.map((item) => {
      return (
        <div key={item?.id}>
          <CartItem item={item} />
        </div>
      );
    });
  };
  return (
    <div>
      <div>{renderItem()}</div>
    </div>
  );
}

export default CartList;
