import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generatePath, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom/dist";
import { fetchTour } from "../../../store/user/fetchTour";

import "./styles.scss";

function DetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const newTourArr = useSelector((state) => state.fetchTourReducer.tours);

  useEffect(() => {
    dispatch(fetchTour());
  }, [dispatch]);

  const arr = newTourArr?.filter((item) => item.id == id);

  const ids = arr?.map((item) => item.id);

  const handlePayments = () => {
    navigate(
      generatePath("/products/cart/:id", {
        id: ids,
      })
    );
  };

  return (
    <div>
      {arr?.map((item) => (
        <div className="container__DetailsCard">
          <div className="container__DetailsCard--all">
            <h1>{item.nameTour}</h1>
            <div className="container__DetailsCard--title">
              <img src={item.img} alt="" />
              <ul className="container__DetailsCard--info">
                <li>
                  <p className="p-at">Mã Tour : </p>
                  <p className="p-as">{item.id}</p>
                </li>
                <li>
                  <p className="p-at">Ngày Khởi Hành : </p>
                  <p className="p-as">{item.startDate}</p>
                </li>
                <li>
                  <p className="p-at">Ngày Về: </p>
                  <p className="p-as">{item.endDate}</p>
                </li>
                <li>
                  <p className="p-at">Nơi Khởi Hành: </p>
                  <p className="p-as">{item.from}</p>
                </li>
                <li>
                  <p className="p-at">Nơi Đến : </p>
                  <p className="p-as">{item.to}</p>
                </li>
                <li>
                  <p className="p-at">Số Chỗ Còn Nhận: </p>
                  <p className="p-as">{item.number}</p>
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
                <h4> {item.descriptions.des1}</h4>
              </div>
              <div className="container__DetailsCard--schedule">
                <h3>Lịch trình ngày 2:</h3>
                <h4> {item.descriptions.des1}</h4>
              </div>
              <div className="container__DetailsCard--schedule">
                <h3>Lịch trình ngày 3:</h3>
                <h4> {item.descriptions.des1}</h4>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DetailsPage;
