import React from "react";
import { useSelector } from "react-redux";


import "./styles.scss";

function DetailsPage({ item }) {
  const newTourArr = useSelector((state) => state.fetchTourReducer.details);

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
              <button class="container__DetailsCard--button">Đặt Ngay</button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
