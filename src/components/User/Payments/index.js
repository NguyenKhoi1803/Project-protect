import React from "react";
import { useSelector } from "react-redux";

function Payments() {
  const paymentsArr = useSelector((state) => state.fetchTourReducer.cart);

  console.log("paymentsArr", paymentsArr);
  return <div>
    {paymentsArr.nameTour}
  </div>;
}

export default Payments;
