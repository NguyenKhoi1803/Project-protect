import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";

import { useNavigate, useParams } from "react-router-dom";
import { getAccountInfo } from "../../../../Auth";
import "./styles.scss";
import tourApis from "../../../../apis/tourApis";
import { STATUS_CODE } from "../../../../constants/indexs";
import cartApis from "../../../../apis/cartApis";
import axiosCLient from "../../../../apis/axiosClient";
import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";

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
        status: "Ch??a thanh to??n",
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
        " *Ch??a nh???p s??? kh??ch ho???c qu?? s??? ch??? c??n nh???n, ch??a ch???n h??nh th???c thanh to??n !"
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
                  <span className="span-at">M?? Tour : </span>{" "}
                  <span className="span-as">{item.id}</span>{" "}
                </p>
                <p className="span-p">
                  {" "}
                  <span className="span-at">Ng??y Kh??i H??nh : </span>{" "}
                  <span className="span-as">{item.startDate}</span>{" "}
                </p>

                <p className="span-p">
                  {" "}
                  <span className="span-at">Th???i Gian : </span>{" "}
                  <span className="span-as">{item.numberDay}</span>{" "}
                </p>
                <p className="span-p">
                  {" "}
                  <span className="span-at">N??i Kh???i H??nh : </span>{" "}
                  <span className="span-as">{item.from}</span>{" "}
                </p>
                <p className="span-p">
                  {" "}
                  <span className="span-at">S??? Ch??? C??n Nh???n : </span>{" "}
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
            <h3>GI?? TOUR C?? B???N</h3>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Gi?? Ng?????i L???n</th>
                  <th>Gi?? Tr??? Em</th>
                  <th>Gi?? Em B??</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Gi?? C?? B???n</td>
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
            <h3>Th??ng Tin Kh??ch H??ng</h3>
            <div className="accountInfo--form">
              <label>M?? Kh??ch H??ng : </label>
              <Input
                placeholder="default size"
                value={account.id}
                prefix={<UserOutlined />}
              />
            </div>
            <div className="accountInfo--form">
              <label>H??? V?? T??n : </label>
              <Input
                placeholder="default size"
                value={account.fullname}
                prefix={<UserOutlined />}
              />
            </div>
            <div className="accountInfo--form">
              <label>Email : </label>

              <Input
                placeholder="default size"
                value={account.email}
                prefix={<UserOutlined />}
              />
            </div>
            <div className="accountInfo--form">
              <label>Phone : </label>

              <Input
                placeholder="default size"
                value={account.phone}
                prefix={<UserOutlined />}
              />
            </div>
          </div>
          <div className="form--2">
            <h3>Nh???p S??? Kh??ch</h3>
            <div className="accountInfo--form">
              <label>Ng?????i L???n :</label>

              <Input
                size="large"
                type="number"
                name="number"
                onChange={(e) => handleChangeFieldsAdult(e)}
                prefix={<UserOutlined />}
              />
            </div>
            <div className="accountInfo--form">
              <label>Tr??? Em :</label>

              <Input
                size="large"
                type="number"
                name="number"
                onChange={(e) => handleChangeFieldsChildren(e)}
                prefix={<UserOutlined />}
              />
            </div>
            <div className="accountInfo--form">
              <label>Em B?? :</label>

              <Input
                size="large"
                type="number"
                name="number"
                onChange={(e) => handleChangeFieldsBaby(e)}
                prefix={<UserOutlined />}
              />
            </div>
            <div className="accountInfo--form">
              <label>T???ng S??? Kh??ch :</label>

              <Input
                size="large"
                value={totalPeople}
                prefix={<UserOutlined />}
              />
            </div>
            <div className="totalPrice">
              <p>T???ng</p>
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
                  Ho??n Th??nh
                </Button>
              ))}
            </div>
          </div>
        </div>
        <div className="paymentsMethod">
          <div className="byCash">
            <input
              type="radio"
              value="Tr???c Ti???p"
              name="payment_method"
              onChange={(e) => handlePayments(e)}
            />
            <div>
              <h3>Thanh To??n Ti???n M???t</h3>
              <div className="checkbox__info">
                <p>
                  Qu?? kh??ch h??ng vui l??ng li??n h??? sales ????? ???????c h??? tr??? th??? t???c
                  thanh to??n tr???c ti???p.
                </p>
                <strong>?????a ??i???m thanh to??n:</strong>
                <p>
                  Tr??? s??? thanh to??n : <span>126 Xu??n Th???y</span>{" "}
                </p>
                <p>
                  ??i???n Tho???i : <span>0779950318</span>{" "}
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
              value="Chuy???n Kho???n"
              name="payment_method"
              onChange={(e) => setPaymentsMethod(e.target.value)}
            />
            <div>
              <h3>Thanh To??n Chuy???n Kho???n</h3>
              <div className="checkbox__info">
                <p>
                  Qu?? kh??ch vui l??ng l???a ch???n chuy???n v??o m???t trong c??c t??i kho???n
                  d?????i ????y :
                </p>
                <div className="backing1">
                  <p>
                    <strong>Ng??n h??ng Vietcombank</strong>
                  </p>
                  <p>
                    ????n v??? th??? h?????ng : <span>C??ng ty MTV Local Tourist</span>{" "}
                  </p>
                  <p>
                    S??? t??i kho???n : <span>0041000388783</span>{" "}
                  </p>
                  <p>N???i dung chuy???n kho???n : T??n kh??ch h??ng + M?? ????n H??ng</p>
                </div>
                <div>
                  <p>
                    <strong>Ng??n h??ng Tp Bank</strong>
                  </p>
                  <p>
                    ????n v??? th??? h?????ng : <span>C??ng ty MTV Local Tourist</span>{" "}
                  </p>
                  <p>
                    S??? t??i kho???n : <span>03954560101</span>{" "}
                  </p>
                  <p>N???i dung chuy???n kho???n : T??n kh??ch h??ng + M?? ????n H??ng</p>
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
              <h5> * Th??ng Tin Ng?????i L???n</h5>
              <div className="formAdult__info">
                <div className="formAdult__info--item">
                  <label> ?????y ????? H??? T??n : </label>
                  <input
                    type="text"
                    name="fullname"
                    onChange={(e) => handleListForm(e, item, "fullname")}
                  />
                </div>
                <div className="formAdult__info--item">
                  <label> S??? ??i???n Tho???i : </label>
                  <input
                    type="number"
                    name="phone"
                    onChange={(e) => handleListForm(e, item, "phone")}
                  />
                </div>
                <div className="formAdult__info--item">
                  <label> S??? Passport/CMND : </label>
                  <input
                    type="number"
                    name="idcard"
                    onChange={(e) => handleListForm(e, item, "idcard")}
                  />
                </div>
                <div className="formAdult__info--item">
                  <label> Ng??y Sinh : </label>
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
              <h5> * Th??ng Tin Tr??? Em</h5>
              <div className="formAdult__info">
                <div className="formAdult__info--item">
                  <label> ?????y ????? H??? T??n : </label>
                  <input
                    type="text"
                    name="fullname"
                    onChange={(e) => handleListForm(e, item, "fullname")}
                  />
                </div>
                <div className="formAdult__info--item">
                  <label> S??? ??i???n Tho???i (Ng?????i ?????i di???n) : </label>
                  <input
                    type="number"
                    name="phone"
                    onChange={(e) => handleListForm(e, item, "phone")}
                  />
                </div>
                <div className="formAdult__info--item">
                  <label> S??? Passport/CMND : </label>
                  <input
                    type="number"
                    name="idcard"
                    onChange={(e) => handleListForm(e, item, "idcard")}
                  />
                </div>
                <div className="formAdult__info--item">
                  <label> Ng??y Sinh : </label>
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
              <h5> * Th??ng Tin Em B??</h5>
              <div className="formAdult__info">
                <div className="formAdult__info--item">
                  <label> ?????y ????? H??? T??n : </label>
                  <input
                    type="text"
                    name="fullname"
                    onChange={(e) => handleListForm(e, item, "fullname")}
                  />
                </div>
                <div className="formAdult__info--item">
                  <label> S??? ??i???n Tho???i (Ng?????i ?????i di???n) : </label>
                  <input
                    type="number"
                    name="phone"
                    onChange={(e) => handleListForm(e, item, "phone")}
                  />
                </div>
                <div className="formAdult__info--item">
                  <label> S??? Passport/CMND : </label>
                  <input
                    type="number"
                    name="idcard"
                    onChange={(e) => handleListForm(e, item, "idcard")}
                  />
                </div>
                <div className="formAdult__info--item">
                  <label> Ng??y Sinh : </label>
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
