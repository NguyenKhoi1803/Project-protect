import {
  AimOutlined,
  CalendarOutlined,
  CarOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { generatePath, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom/dist";
import { checkLogin } from "../../../../Auth";
import { fetchTour } from "../../../../store/user/fetchTour";

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
    if (checkLogin()) {
      navigate(
        generatePath("/products/details/booking/:id", {
          id: ids,
        })
      );
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="container__detailsPage">
      {arr?.map((item) => (
        <div className="container__DetailsCard" key={item.id} item={item}>
          <div className="container__DetailsCard--all">
            <h1>{item.nameTour}</h1>
            <div className="container__detail">
              <img className="container__detail--img" src={item.img} />
              <div className="container__detail-details">
                <h4>{item.nameTour}</h4>

                <p>
                  {" "}
                  <AimOutlined /> <span> Nơi Khởi Hành</span> : {item.from}
                </p>

                <p>
                  {" "}
                  <AimOutlined /> <span>Nơi Đến</span> : {item.to}
                </p>

                <p>
                  {" "}
                  <CarOutlined /> <span>Phương tiện di chuyển</span> :{" "}
                  {item.vehicle}
                </p>
                <p>
                  {" "}
                  <CalendarOutlined /> <span>Ngày Khởi Hành</span> :{" "}
                  {item.startDate}
                </p>
                <p>
                  {" "}
                  <CalendarOutlined /> <span>Ngày Về</span> : {item.endDate}
                </p>
                <p>
                  {" "}
                  <span>Gía 1 Người</span> :{" "}
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(item.price)}
                </p>
                <Button
                  variant="success"
                  className="addToCart"
                  onClick={handlePayments}
                >
                  Đặt Ngay
                </Button>
              </div>
            </div>
            <div className="container__DetailsCard--descrip">
              <div className="container__DetailsCard--schedule">
                <h3>Lịch trình : </h3>
                <h4> {item.descriptions}</h4>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DetailsPage;
