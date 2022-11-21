import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";

import { useNavigate, useParams } from "react-router-dom";
import { getAccountInfo } from "../../../../Auth";
import "./styles.scss";
import tourApis from "../../../../apis/tourApis";
import { STATUS_CODE } from "../../../../constants/indexs";
import cartApis from "../../../../apis/cartApis";
import axiosCLient from "../../../../apis/axiosClient";

function Payments() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [tourList, setTourList] = useState([]);
  const [isLoadData, setIsLoadData] = useState(true);

  const fetchData = async () => {
    setIsLoadData(true);

    const response = await tourApis.getAll();

    if (response.status === STATUS_CODE.OK) {
      setTourList(response.data);
    } else {
      console.log("Get list failed", response.status);
    }
  };

  useEffect(() => {
    fetchData();
  }, [isLoadData]);

  const newArr = tourList?.filter(
    (item) =>
      new Date(item.startDate).getTime() > new Date().getTime() - 21600000 &&
      item.quantity > 0
  );

  const arrr = newArr?.filter((item) => item.id == id);
  const account = getAccountInfo();
  const adultsTour = arrr?.map((item) => item.priceAdult);
  const childrenTour = arrr?.map((item) => item.priceChildren);
  const babyTour = arrr?.map((item) => item.priceBaby);

  const [numberAdult, setNumberAdult] = useState("0");
  const [numberChildren, setNumberChildren] = useState("0");
  const [numberBaby, setNumberBaby] = useState("0");
  const [messErr, setMessErr] = useState("");
  const [paymentsMethod, setPaymentsMethod] = useState("");
  const handleChangeFieldsAdult = (e) => {
    setNumberAdult(e.target.value || 0);
    setMessErr("");
  };

  const handleChangeFieldsChildren = (ev) => {
    setNumberChildren(ev.target.value || 0);
    setMessErr("");
  };

  const handleChangeFieldsBaby = (eve) => {
    setNumberBaby(eve.target.value || 0);
    setMessErr("");
  };

  const handlePayments = (e) => {
    setPaymentsMethod(e.target.value);
  };

  console.log("paymentsMethod", typeof paymentsMethod);

  const totalPeople =
    parseInt(numberAdult) + parseInt(numberChildren) + parseInt(numberBaby);

  const adults = numberAdult * adultsTour;
  const children = numberChildren * childrenTour;
  const baby = numberBaby * babyTour;
  const total = adults + children + baby;
  let list = [];
  const handleListForm = (e, index, name) => {
    list[index] = list[index] || {};
    list[index][name] = e.target.value;
  };

  const handleSubmit = async (value) => {
    const totalPeople =
      parseInt(numberAdult) + parseInt(numberChildren) + parseInt(numberBaby);

    if (totalPeople > 0 && totalPeople <= value && paymentsMethod != "") {
      const ids = new Date().getTime();
      const cart = {
        account: account,
        tour: arrr[0],
        numberAdult: numberAdult,
        numberChildren: numberChildren,
        numberBaby: numberBaby,
        total: total,
        codeOrder: ids,
        status: "Chưa thanh toán",
        infos: list,
        totalPeople,
        paymentMethod: paymentsMethod,
      };

      const response = await cartApis.add(cart);
      if (response.status === STATUS_CODE.CREATED) {
        console.log("Congratulations !");
      } else {
        console.log("Do Again!");
      }

      const newQuantity = value - totalPeople;
      const updateQuantity = { id, quantity: newQuantity };
      try {
        const res = await axiosCLient.patch(`/tour/${id}`, updateQuantity);
      } catch (error) {
        console.log("loi roi");
      }

      navigate(`/tour/payments/succeed/${ids}`);
    } else {
      setMessErr(
        " *Chưa nhập số khách hoặc quá số chỗ còn nhận, chưa chọn hình thức thanh toán !"
      );
    }
  };

  return (
    <div className="container__payments">
      <div className="container__payments--wrap">
        {arrr.map((item) => (
          <div className="productItem" key={item.id}>
            <div className="productItem__img">
              <img src={item.img1} alt="" />
            </div>
            <div className="productItem__details">
              <div className="productItem__details--name">
                <h2>{item.nameTour}</h2>
              </div>
              <div className="productItem__details--info">
                <p className="span-p">
                  {" "}
                  <span className="span-at">Mã Tour : </span>{" "}
                  <span className="span-as">{item.id}</span>{" "}
                </p>
                <p className="span-p">
                  {" "}
                  <span className="span-at">Ngày Khơi Hành : </span>{" "}
                  <span className="span-as">{item.startDate}</span>{" "}
                </p>

                <p className="span-p">
                  {" "}
                  <span className="span-at">Thời Gian : </span>{" "}
                  <span className="span-as">{item.numberDay}</span>{" "}
                </p>
                <p className="span-p">
                  {" "}
                  <span className="span-at">Nơi Khởi Hành : </span>{" "}
                  <span className="span-as">{item.from}</span>{" "}
                </p>
                <p className="span-p">
                  {" "}
                  <span className="span-at">Số Chỗ Còn Nhận : </span>{" "}
                  <span className="span-as">{item.quantity}</span>{" "}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="container__payments--wrap">
        {arrr.map((item) => (
          <div className="productItem--price" key={item.id}>
            <h3>GIÁ TOUR CƠ BẢN</h3>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Giá Người Lớn</th>
                  <th>Giá Trẻ Em</th>
                  <th>Giá Em Bé</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Giá Cơ Bản</td>
                  <td>
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(item.priceAdult)}
                  </td>
                  <td>
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(item.priceChildren)}
                  </td>
                  <td>
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(item.priceBaby)}
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        ))}
      </div>
      <div className="container__payments--wrap1">
        <div className="infoForm">
          <div className="form--1">
            <h3>Thông Tin Khách Hàng</h3>
            <div className="accountInfo--form">
              <label>Mã Khách Hàng : </label>
              <input value={account.id} />
            </div>
            <div className="accountInfo--form">
              <label>Họ Và Tên : </label>
              <input value={account.fullname} />
            </div>
            <div className="accountInfo--form">
              <label>Email : </label>
              <input value={account.email} />
            </div>
            <div className="accountInfo--form">
              <label>Phone : </label>
              <input value={account.phone} />
            </div>
          </div>
          <div className="form--2">
            <h3>Nhập Số Khách</h3>
            <div className="accountInfo--form">
              <label>Người Lớn :</label>
              <input
                type="number"
                name="number"
                onChange={(e) => handleChangeFieldsAdult(e)}
              />
            </div>
            <div className="accountInfo--form">
              <label>Trẻ Em :</label>
              <input
                type="number"
                name="number"
                onChange={(e) => handleChangeFieldsChildren(e)}
              />
            </div>
            <div className="accountInfo--form">
              <label>Em Bé :</label>
              <input
                type="number"
                name="number"
                onChange={(e) => handleChangeFieldsBaby(e)}
              />
            </div>
            <div className="accountInfo--form">
              <label>Tổng Số Khách :</label>
              <input type="number" name="number" value={totalPeople} />
            </div>
            <div className="totalPrice">
              <p>Tổng</p>
              <p>
                {" "}
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(total)}
              </p>
            </div>
            <div className="button__submit">
              <span className="errorMess">{messErr}</span>

              {arrr.map((item) => (
                <Button
                  key={item.id}
                  className="btn"
                  variant="primary"
                  onClick={() => handleSubmit(item.quantity)}
                >
                  Hoàn Thành
                </Button>
              ))}
            </div>
          </div>
        </div>
        <div className="paymentsMethod">
          <div className="byCash">
            <input
              type="radio"
              value="Trực Tiếp"
              name="payment_method"
              onChange={(e) => handlePayments(e)}
            />
            <div>
              <h3>Thanh Toán Tiền Mặt</h3>
              <div className="checkbox__info">
                <p>
                  Quý khách hàng vui lòng liên hệ sales để được hỗ trợ thủ tục
                  thanh toán trực tiếp.
                </p>
                <strong>Địa điềm thanh toán:</strong>
                <p>
                  Trụ sở thanh toán : <span>126 Xuân Thủy</span>{" "}
                </p>
                <p>
                  Điện Thoại : <span>0779950318</span>{" "}
                </p>
                <p>
                  FanPage : <span>0779950318</span>{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="byCash">
            <input
              type="radio"
              value="Chuyển Khoản"
              name="payment_method"
              onChange={(e) => setPaymentsMethod(e.target.value)}
            />
            <div>
              <h3>Thanh Toán Chuyển Khoản</h3>
              <div className="checkbox__info">
                <p>
                  Quý khách vui lòng lựa chọn chuyển vào một trong các tài khoản
                  dưới đây :
                </p>
                <div className="backing1">
                  <p>
                    <strong>Ngân hàng Vietcombank</strong>
                  </p>
                  <p>
                    Đơn vị thụ hưởng : <span>Công ty MTV Local Tourist</span>{" "}
                  </p>
                  <p>
                    Số tài khoản : <span>0041000388783</span>{" "}
                  </p>
                  <p>Nội dung chuyển khoản : Tên khách hàng + Mã Đơn Hàng</p>
                </div>
                <div>
                  <p>
                    <strong>Ngân hàng Tp Bank</strong>
                  </p>
                  <p>
                    Đơn vị thụ hưởng : <span>Công ty MTV Local Tourist</span>{" "}
                  </p>
                  <p>
                    Số tài khoản : <span>03954560101</span>{" "}
                  </p>
                  <p>Nội dung chuyển khoản : Tên khách hàng + Mã Đơn Hàng</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container__detailInfo">
        <div className="container__adult">
          {[...Array(parseInt(numberAdult)).keys()].map((item) => (
            <div key={item} className="formAdult">
              <h5> * Thông Tin Người Lớn</h5>
              <div className="formAdult__info">
                <div className="formAdult__info--item">
                  <label> Đầy Đủ Họ Tên : </label>
                  <input
                    type="text"
                    name="fullname"
                    onChange={(e) => handleListForm(e, item, "fullname")}
                  />
                </div>
                <div className="formAdult__info--item">
                  <label> Số Điện Thoại : </label>
                  <input
                    type="number"
                    name="phone"
                    onChange={(e) => handleListForm(e, item, "phone")}
                  />
                </div>
                <div className="formAdult__info--item">
                  <label> Số Passport/CMND : </label>
                  <input
                    type="number"
                    name="idcard"
                    onChange={(e) => handleListForm(e, item, "idcard")}
                  />
                </div>
                <div className="formAdult__info--item">
                  <label> Ngày Sinh : </label>
                  <input
                    type="date"
                    name="birthDay"
                    onChange={(e) => handleListForm(e, item, "birthDay")}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container__detailInfo">
        <div className="container__adult">
          {[...Array(parseInt(numberChildren)).keys()].map((item) => (
            <div key={item} className="formAdult">
              <h5> * Thông Tin Trẻ Em</h5>
              <div className="formAdult__info">
                <div className="formAdult__info--item">
                  <label> Đầy Đủ Họ Tên : </label>
                  <input
                    type="text"
                    name="fullname"
                    onChange={(e) => handleListForm(e, item, "fullname")}
                  />
                </div>
                <div className="formAdult__info--item">
                  <label> Số Điện Thoại (Người đại diện) : </label>
                  <input
                    type="number"
                    name="phone"
                    onChange={(e) => handleListForm(e, item, "phone")}
                  />
                </div>
                <div className="formAdult__info--item">
                  <label> Số Passport/CMND : </label>
                  <input
                    type="number"
                    name="idcard"
                    onChange={(e) => handleListForm(e, item, "idcard")}
                  />
                </div>
                <div className="formAdult__info--item">
                  <label> Ngày Sinh : </label>
                  <input
                    type="date"
                    name="birthDay"
                    onChange={(e) => handleListForm(e, item, "birthDay")}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container__detailInfo">
        <div className="container__adult">
          {[...Array(parseInt(numberBaby)).keys()].map((item) => (
            <div key={item} className="formAdult">
              <h5> * Thông Tin Em Bé</h5>
              <div className="formAdult__info">
                <div className="formAdult__info--item">
                  <label> Đầy Đủ Họ Tên : </label>
                  <input
                    type="text"
                    name="fullname"
                    onChange={(e) => handleListForm(e, item, "fullname")}
                  />
                </div>
                <div className="formAdult__info--item">
                  <label> Số Điện Thoại (Người đại diện) : </label>
                  <input
                    type="number"
                    name="phone"
                    onChange={(e) => handleListForm(e, item, "phone")}
                  />
                </div>
                <div className="formAdult__info--item">
                  <label> Số Passport/CMND : </label>
                  <input
                    type="number"
                    name="idcard"
                    onChange={(e) => handleListForm(e, item, "idcard")}
                  />
                </div>
                <div className="formAdult__info--item">
                  <label> Ngày Sinh : </label>
                  <input
                    type="date"
                    name="birthDay"
                    onChange={(e) => handleListForm(e, item, "birthDay")}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}

export default Payments;
