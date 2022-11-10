import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCart } from "../../../../store/user/addToCartSlice";

import "./styles.scss";

function SucceedPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const newCartArr = useSelector((state) => state.addToCartReducer.carts);
  const newArr = newCartArr?.filter((item) => item.codeOrder == id);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  return (
    <div className="container__succeed">
      {newArr?.map((item) => (
        <div className="container__succeed--details" key={item.id} item={item}>
          
        </div>
      ))}
    </div>
  );
}

export default SucceedPage;
