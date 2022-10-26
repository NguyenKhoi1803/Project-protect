import { BarcodeOutlined, CalendarOutlined } from "@ant-design/icons";
import Button from "react-bootstrap/Button";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generatePath, useNavigate, useParams } from "react-router-dom";
import { getAccountInfo } from "../../../../Auth";
import { fetchTour } from "../../../../store/user/fetchTour";
import "./styles.scss";
import { addToCart } from "../../../../store/user/addToCartSlice";
import emailjs from "@emailjs/browser";
import { uuid } from 'uuidv4';
import { regex } from 'uuidv4';

function BookingPages() {
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
  const total = number * priceTour;

  const form = useRef();

  const handleSubmit = () => {


    const ids = new Date().getTime();

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
      total: total,
      codeOrder: ids,
      status: 0,
      timeOrder: ids,

    };

    navigate(
      generatePath("/products/details/booking/succeed/:id", {
        id: ids,
      })
    );
    dispatch(addToCart(cart));

    emailjs
      .sendForm(
        "service_6zuiagt",
        "template_a2bgpmj",
        form.current,
        "hfd1w1MRIDzqlnoSE"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container__payments">
      <div className="payments">
        <div className="payments__form">
          <form ref={form} onSubmit={handleSubmit}>
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

                  <p>
                    {" "}
                    <CalendarOutlined /> Gia 1 nguoi :{" "}
                    <span>
                      {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(item.price)}
                    </span>{" "}
                    <span>x {number}</span>
                  </p>
                  <p>
                    {" "}
                    <CalendarOutlined /> Tong :{" "}
                    <span>
                      {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(total)}
                    </span>
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

export default BookingPages;
