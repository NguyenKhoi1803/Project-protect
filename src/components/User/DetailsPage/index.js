import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchTour } from "../../../store/user/fetchTour";

import "./styles.scss";

function DetailsPage() {
  // const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const newTourArr = useSelector((state) => state.fetchTourReducer.cart);

  const handlePayments = () => {
    navigate("/payments");
  };

  return (
    <div className="container__DetailsCard">
      <div className="container__DetailsCard--all">
        <h1>{newTourArr.nameTour}</h1>
        <div className="container__DetailsCard--title">
          <img src={newTourArr.img} alt="" />
          <ul className="container__DetailsCard--info">
            <li>
              <p className="p-at">Mã Tour : </p>
              <p className="p-as">{newTourArr.id}</p>
            </li>
            <li>
              <p className="p-at">Ngày Khởi Hành : </p>
              <p className="p-as">{newTourArr.startDate}</p>
            </li>
            <li>
              <p className="p-at">Ngày Về: </p>
              <p className="p-as">{newTourArr.endDate}</p>
            </li>
            <li>
              <p className="p-at">Nơi Khởi Hành: </p>
              <p className="p-as">{newTourArr.from}</p>
            </li>
            <li>
              <p className="p-at">Nơi Đến : </p>
              <p className="p-as">{newTourArr.to}</p>
            </li>
            <li>
              <p className="p-at">Số Chỗ Còn Nhận: </p>
              <p className="p-as">{newTourArr.number}</p>
            </li>
            <div>
              <button
                class="container__DetailsCard--button"
                onClick={handlePayments}
              >
                Đặt Ngay
              </button>
            </div>
          </ul>
        </div>
        <div className="container__DetailsCard--descrip">
          <div className="container__DetailsCard--schedule">
            <h3>Lịch trình ngày 1:</h3>
            <h4> {newTourArr.descriptions.des1}</h4>
          </div>
          <div className="container__DetailsCard--schedule">
            <h3>Lịch trình ngày 2:</h3>
            <h4> {newTourArr.descriptions.des1}</h4>
          </div>
          <div className="container__DetailsCard--schedule">
            <h3>Lịch trình ngày 3:</h3>
            <h4> {newTourArr.descriptions.des1}</h4>
          </div>
        </div>
      </div>
    </div>

    // <div>
    //   {id}
    // </div>
  );
}

export default DetailsPage;
