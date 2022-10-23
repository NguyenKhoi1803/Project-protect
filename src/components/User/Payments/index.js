import { BarcodeOutlined, CalendarOutlined } from "@ant-design/icons";
import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generatePath, useNavigate, useParams } from "react-router-dom";
import { getAccountInfo } from "../../../Auth";
import { fetchTour } from "../../../store/user/fetchTour";
import "./styles.scss";
import { addToCart } from "../../../store/user/addToCartSlice";

function Payments() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const newTourArr = useSelector((state) => state.fetchTourReducer.tours);
  const arrr = newTourArr?.filter((item) => item.id == id);
  useEffect(() => {
    dispatch(fetchTour());
  }, [dispatch]);

  const account = getAccountInfo();

  const codeTour = arrr?.map((item) => item.id);
  const titleTour = arrr?.map((item) => item.nameTour);
  const priceTour = arrr?.map((item) => item.price);
  const startDayTour = arrr?.map((item) => item.startDate);

  const [number, setNumber] = useState("");

  const handleChangeFields = (e) => {
    setNumber(e.target.value);
  };

  const idss = arrr?.map((item) => item.id);

  const handleSubmit = () => {
    const cart = {
      idUser: account.id,
      name: account.fullname,
      email: account.email,
      phone: account.phone,
      idTour: codeTour,
      nameTour: titleTour,
      cost: priceTour,
      numberPeople: number,
      day: startDayTour,
    };

    dispatch(addToCart(cart));
    navigate(
      generatePath("/succeed/:id", {
        id: idss,
      })
    );
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

              <input
                name="number"
                placeholder="Nhập số khách tham gia Tour tại đây !"
                onChange={handleChangeFields}
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
