import { BarcodeOutlined, CalendarOutlined } from "@ant-design/icons";
import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getAccountInfo } from "../../../Auth";
import { fetchTour } from "../../../store/user/fetchTour";
import "./styles.scss";
import { addToCart } from "../../../store/user/addToCartSlice";

function Payments() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const newTourArr = useSelector((state) => state.fetchTourReducer.tours);

  useEffect(() => {
    dispatch(fetchTour());
  }, [dispatch]);

  const account = getAccountInfo();

  console.log("account", account.email);

  const arrr = newTourArr?.filter((item) => item.id == id);

  const codeTour = arrr?.map((item) => item.id);
  const titleTour = arrr?.map((item) => item.nameTour);

  const handleSubmit = () => {
    const cart = {
      idUser: account.id,
      name: account.fullname,
      email: account.email,
      phone: account.phone,
      idTour: codeTour,
      nameTour: titleTour,
    };

    dispatch(addToCart(cart));
    navigate("/");
  };

  return (
    <div className="container__payments">
      <div className="payments">
        <div className="payments__form">
          <form onSubmit={handleSubmit}>
            <div className="payments__formFields">
              <h2>Thông tin khách hàng</h2>
              <input name="id" placeholder="Đầy Đủ Họ Tên" value={account.id} />
              <input
                name="name"
                placeholder="Đầy Đủ Họ Tên"
                value={account.fullname}
              />
              <input
                name="email"
                placeholder="Đầy Đủ Họ Tên"
                value={account.email}
              />
              <input
                name="phone"
                placeholder="Số Điện Thoại"
                value={account.phone}
              />
              <Button className="btn" variant="primary" onClick={handleSubmit}>
                Hoàn Thành
              </Button>
            </div>
          </form>
        </div>
        <div className="payments__details">
          <h1>Details</h1>
          {arrr?.map((item) => (
            <div className="CardItem">
              <div className="card">
                <a href="/" className="card-top">
                  <img src={item.img} alt="asdasd" />
                </a>
                <div className="card-bottom">
                  <a href="/">
                    <h3>{item.nameTour}</h3>
                  </a>
                  <p>
                    {" "}
                    <BarcodeOutlined /> Mã Tour : {item.id}
                  </p>
                  <p>
                    {" "}
                    <CalendarOutlined /> Ngày Khời Hành : {item.startDate}{" "}
                  </p>
                  <p>
                    {" "}
                    <CalendarOutlined /> Ngày Về : {item.endDate}{" "}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Payments;
