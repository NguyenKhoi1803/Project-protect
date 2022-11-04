import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { generatePath, useNavigate, useParams } from "react-router-dom";
import { fetchTour, patchQuantity } from "../../../../store/user/fetchTour";
import { getAccountInfo } from "../../../../Auth";
import "./styles.scss";
import { addToCart } from "../../../../store/user/addToCartSlice";

function Payments(props) {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  const newTourArr = useSelector((state) => state.fetchTourReducer.tours);
  const arrr = newTourArr?.filter((item) => item.id == id);
  const account = getAccountInfo();
  const idTour = arrr?.map((item) => item.id);
  const titleTour = arrr?.map((item) => item.nameTour);
  const startDayTour = arrr?.map((item) => item.startDate);
  const to = arrr?.map((item) => item.to);
  const adultsTour = arrr?.map((item) => item.priceAdult);
  const childrenTour = arrr?.map((item) => item.priceChildren);
  const babyTour = arrr?.map((item) => item.priceBaby);

  useEffect(() => {
    dispatch(fetchTour());
  }, [dispatch]);

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

  const totalPeople =
    parseInt(numberAdult) + parseInt(numberChildren) + parseInt(numberBaby);

  const adults = numberAdult * adultsTour;
  const children = numberChildren * childrenTour;
  const baby = numberBaby * babyTour;
  const total = adults + children + baby;

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

  return (
    <div className="container__payments">
      <div className="container__payments--wrap">
        {arrr.map((item) => (
          <div className="productItem" key={item.id}>
            <div className="productItem__img">
              <img src={item.img} alt="" />
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
        <div className="accountInfo">
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
          <div className="accountInfo--formValue">
            <div>
              <label>Người Lớn</label>
              <div>
                <input
                  type="number"
                  name="number"
                  onChange={(e) => handleChangeFieldsAdult(e)}
                />
              </div>
            </div>
            <div>
              <label>Trẻ Em</label>
              <div>
                <input
                  type="number"
                  name="number"
                  onChange={(e) => handleChangeFieldsChildren(e)}
                />
              </div>
            </div>
            <div>
              <label>Em Bé</label>
              <div>
                <input
                  type="number"
                  name="number"
                  onChange={(e) => handleChangeFieldsBaby(e)}
                />
              </div>
            </div>
            <div>
              <label>Tổng Số Khách</label>
              <div>
                <input type="number" name="number" value={totalPeople} />
              </div>
            </div>
          </div>

          <span>{messErr}</span>

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

          <div>
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

        <div className="paymentsMethod">
          <div className="byCash">
            <input type="checkbox" />
            <div>
              <h3>Thanh Toán Tiền Mặt</h3>
              <div className="checkbox__info">
                <p>
                  "Quý khách hàng vui lòng liên hệ sales để được hỗ trợ thủ tục
                  thanh toán trực tiếp."
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
            <input type="checkbox" />
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payments;
