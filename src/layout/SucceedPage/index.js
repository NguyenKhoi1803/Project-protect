import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCart } from "../../store/user/addToCartSlice";
import "./styles.scss";

function SucceedPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const newCartArr = useSelector((state) => state.addToCartReducer.carts);

  const arrs = newCartArr?.filter((item) => item.id == id);

  console.log("newCartArr", newCartArr);

  const numbers = parseInt(newCartArr?.map((item) => item.numberPeople));
  const price = parseInt(newCartArr?.map((item) => item.cost));
  const totalPrice = numbers * price;

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  return (
    <div className="container__succeed">
      {arrs?.map((item) => (
        <div className="container__succeed--details">
          <div className="container__succeed--left">
            <h1>LOCAL TOURIST</h1>
            <div className="section__left--details">
              <p>
                Cảm ơn <span>{item.name}</span> đã đặt tour tại LOCAL TOURIST !
              </p>
              <p>
                {" "}
                Mã Tour : <span>{item.idTour}</span>
              </p>
              <p>
                {" "}
                Tên Tour : <span>{item.nameTour}</span>
              </p>
              <p>
                {" "}
                Gía 1 Người : <span>{item.cost}</span>
              </p>
              <p>
                {" "}
                Số Lượng Khách Bạn Đã Đặt : <span>{item.numberPeople}</span>
              </p>
              <p>
                {" "}
                Tổng Tiền : <span>{totalPrice}</span>
              </p>
            </div>
          </div>
          <div className="container__succeed--right">
            <h1>LOCAL TOURIST</h1>
            <div className="section__right--details">
              <p>{item.idTour}</p>
              <p>{item.nameTour}</p>
              <p>{totalPrice}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SucceedPage;
