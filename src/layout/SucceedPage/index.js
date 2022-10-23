import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../../store/user/addToCartSlice";

function SucceedPage() {
  const dispatch = useDispatch();
  const newCartArr = useSelector((state) => state.addToCartReducer.carts);

  const numbers = parseInt(newCartArr.map((item) => item.numberPeople));

  const price = parseInt(newCartArr.map((item) => item.cost));

  console.log("numbers", numbers);
  console.log("price", price);

  const totalPrice = numbers * price;

  console.log("totalPrice", totalPrice);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  return (
    <div>
      {newCartArr?.map((item) => (
        <div>
          <p>{item.idTour}</p>
          <p>{item.nameTour}</p>
          <p>{totalPrice}</p>
        </div>
      ))}
    </div>
  );
}

export default SucceedPage;
