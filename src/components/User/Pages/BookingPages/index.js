import { BarcodeOutlined, CalendarOutlined } from "@ant-design/icons";
import Button from "react-bootstrap/Button";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generatePath, useNavigate, useParams } from "react-router-dom";
import { getAccountInfo } from "../../../../Auth";
import { fetchTour, putTour, update } from "../../../../store/user/fetchTour";
import "./styles.scss";
import { addToCart } from "../../../../store/user/addToCartSlice";
import emailjs from "@emailjs/browser";
import axios from "axios";

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
  const startDayTour = arrr?.map((item) => item.startDate);
  const to = arrr?.map((item) => item.to);
  const adultsTour = arrr?.map((item) => item.priceAdult);
  const childrenTour = arrr?.map((item) => item.priceChildren);
  const babyTour = arrr?.map((item) => item.priceBaby);

  const [numberAdult, setNumberAdult] = useState("");
  const [numberChildren, setNumberChildren] = useState("");
  const [numberBaby, setNumberBaby] = useState("");
  const [messErr, setMessErr] = useState("")

  const handleChangeFieldsAdult = (e) => {
    setNumberAdult(e.target.value);
  };

  const handleChangeFieldsChildren = (ev) => {
    setNumberChildren(ev.target.value);
  };

  const handleChangeFieldsBaby = (ev) => {
    setNumberBaby(ev.target.value);
  };

  const totalPeople =
    parseInt(numberAdult) + parseInt(numberChildren) + parseInt(numberBaby);

  const adults = numberAdult * adultsTour;
  const children = numberChildren * childrenTour;
  const baby = numberBaby * babyTour;
  const total = adults + children + baby;

  const form = useRef();

  const handleSubmit = (id) => {
    console.log("id", id);

    const newQuantity = id - totalPeople;

    if (totalPeople <= id) {
      const ids = new Date().getTime();
      const cart = {
        idUser: account.id,
        name: account.fullname,
        email: account.email,
        phone: account.phone,
        idTour: codeTour[0],
        to: to[0],
        nameTour: titleTour[0],
        adultsTour: adultsTour[0],
        childrenTour: childrenTour[0],
        babyTour: babyTour[0],
        numberAdult: numberAdult,
        numberChildren: numberChildren,
        numberBaby: numberBaby,
        day: startDayTour[0],
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
    } else {
      setMessErr(" * Quá Số Chỗ Còn Nhận !")
    }
  };

  return (
    <div className="container__payments">
      <div className="payments">
        <div className="payments__form">
          <form ref={form} onSubmit={handleSubmit}>
            <div className="payments__formFields">
              <h2>Thông tin khách hàng</h2>
              <div className="payments__formFields--account">
                <p>
                  {" "}
                  <span> Mã Khách Hàng : </span>
                  {account.id}
                </p>
                <p>
                  {" "}
                  <span> Đầy Đủ Họ Tên : </span>
                  {account.fullname}
                </p>
                <p>
                  {" "}
                  <span> Email : </span>
                  {account.email}
                </p>
                <p>
                  {" "}
                  <span> Số Điện Thoại : </span>
                  {account.phone}
                </p>
              </div>

              <div className="payments__formFields--input">
                <input
                  type="number"
                  name="number"
                  placeholder="Nhập số Người Lớn !"
                  onChange={(e) => handleChangeFieldsAdult(e)}
                />
                <input
                  type="number"
                  name="number"
                  placeholder="Nhập số Trẻ Em!"
                  onChange={(ev) => handleChangeFieldsChildren(ev)}
                />
                <input
                  type="number"
                  name="number"
                  placeholder="Nhập số Em Bé !"
                  onChange={(eve) => handleChangeFieldsBaby(eve)}
                />
              </div>
              <span className="messError">{messErr}</span>
            </div>
          </form>
        </div>
        <div className="payments__details">
          {arrr?.map((item) => (
            <div className="CardItem" key={item.id} item={item}>
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
                    <CalendarOutlined /> Số Chỗ Còn Nhận : {item.quantity}{" "}
                  </p>

                  <div>
                    <p>
                      {" "}
                      <CalendarOutlined /> Gia Người Lớn :{" "}
                      <span>
                        {new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(item.priceAdult)}
                      </span>{" "}
                      <span>x {numberAdult}</span>
                    </p>

                    <p>
                      {" "}
                      <CalendarOutlined /> Gia Trẻ Em :{" "}
                      <span>
                        {new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(item.priceChildren)}
                      </span>{" "}
                      <span>x {numberChildren}</span>
                    </p>

                    <p>
                      {" "}
                      <CalendarOutlined /> Gia Em Bé :{" "}
                      <span>
                        {new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(item.priceBaby)}
                      </span>{" "}
                      <span>x {numberBaby}</span>
                    </p>
                  </div>
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
                  <Button
                    className="btn"
                    variant="primary"
                    onClick={() => handleSubmit(item.quantity)}
                  >
                    Hoàn Thành
                  </Button>
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
