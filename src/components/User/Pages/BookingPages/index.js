import { BarcodeOutlined, CalendarOutlined } from "@ant-design/icons";

import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generatePath, useNavigate, useParams } from "react-router-dom";
import { getAccountInfo } from "../../../../Auth";
import { fetchTour, patchQuantity } from "../../../../store/user/fetchTour";
import "./styles.scss";
import { addToCart } from "../../../../store/user/addToCartSlice";
import emailjs from "@emailjs/browser";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { updateUser } from "../../../../store/user/register";

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
  const idTour = arrr?.map((item) => item.id);
  const titleTour = arrr?.map((item) => item.nameTour);
  const startDayTour = arrr?.map((item) => item.startDate);
  const to = arrr?.map((item) => item.to);
  const adultsTour = arrr?.map((item) => item.priceAdult);
  const childrenTour = arrr?.map((item) => item.priceChildren);
  const babyTour = arrr?.map((item) => item.priceBaby);

  const [numberAdult, setNumberAdult] = useState("0");
  const [numberChildren, setNumberChildren] = useState("0");
  const [numberBaby, setNumberBaby] = useState("0");
  const [messErr, setMessErr] = useState("");

  const handleChangeFieldsAdult = (e) => {
    setNumberAdult(e.target.value);
  };

  const handleChangeFieldsChildren = (ev) => {
    setNumberChildren(ev.target.value);
  };

  const handleChangeFieldsBaby = (eve) => {
    setNumberBaby(eve.target.value);
  };

  const adults = numberAdult * adultsTour;
  const children = numberChildren * childrenTour;
  const baby = numberBaby * babyTour;
  const total = adults + children + baby;

  const form = useRef();

  const handleSubmit = (value) => {
    const totalPeople =
      parseInt(numberAdult) + parseInt(numberChildren) + parseInt(numberBaby);
    if (totalPeople <= value) {
      const ids = new Date().getTime();
      const cart = {
        idUser: account.id,
        name: account.fullname,
        email: account.email,
        phone: account.phone,
        to: to[0],
        idTour: idTour[0],
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

      const newQuantity = value - totalPeople;

      dispatch(
        patchQuantity({
          id: id,
          quantity: newQuantity,
        })
      );
    } else {
      setMessErr("Quá số chỗ còn nhận !");
    }
  };

  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const handleClose = () => setShow(false);

  const hanldeChangeName = (name) => {
    setName(name.target.value);
  };

  const hanldeChangeEmail = (email) => {
    setEmail(email.target.value);
  };

  const hanldeChangePhone = (phone) => {
    setPhone(phone.target.value);
  };

  const handleSave = (e) => {
    dispatch(
      updateUser({
        id: e,
        fullname: name,
        email: email,
        phone: phone,
      })
    );

    setShow(false);
  };
  const handleShow = () => setShow(true);

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

                <div>
                  <Button variant="primary" onClick={handleShow}>
                    Sửa Thông Tin
                  </Button>

                  <Modal show={show}>
                    <Modal.Header closeButton>
                      <Modal.Title>Sửa Thông Tin</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <div className="detailsForm">
                        <label>Họ Tên : </label>
                        <input
                          type="text"
                          onChange={(name) => hanldeChangeName(name)}
                        />
                      </div>
                      <div className="detailsForm">
                        <label>Email : </label>
                        <input
                          type="email"
                          onChange={(email) => hanldeChangeEmail(email)}
                        />
                      </div>
                      <div className="detailsForm">
                        <label>Số Điện Thoại : </label>
                        <input
                          type="number"
                          onChange={(phone) => hanldeChangePhone(phone)}
                        />
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button
                        variant="primary"
                        onClick={() => handleSave(account.id)}
                      >
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
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
              <span>{messErr}</span>
            </div>
          </form>
        </div>
        <div className="payments__details">
          {arrr?.map((item) => (
            <div className="CardItem" key={item.id} item={item}>
              <div className="card">
                <a href="/" className="card-top">
                  <img src={item.img}  />
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
                      <CalendarOutlined /> Giá Người Lớn :{" "}
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
                      <CalendarOutlined /> Giá Trẻ Em :{" "}
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
                      <CalendarOutlined /> Giá Em Bé :{" "}
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
                    <CalendarOutlined /> Tổng :{" "}
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
