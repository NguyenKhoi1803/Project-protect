import { BarcodeOutlined, CalendarOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./styles.scss";

function Payments() {
  const paymentsArr = useSelector((state) => state.fetchTourReducer.cart);
  console.log("paymentsArr", paymentsArr);

  const [formFields, setFormFields] = useState([
    {
      name: "",
      phone: "",
      address: "",
      sex: "",
      idCard: "",
      age: "",
    },
  ]);

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };

  const submit = (e) => {
    e.preventDefault();
  };

  const addFields = () => {
    let object = {
      name: "",
      phone: "",
      address: "",
      sex: "",
      idCard: "",
      age: "",
    };
    setFormFields([...formFields, object]);
  };

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1);
    setFormFields(data);
  };

  return (
    <div>
      <div className="payments">
        <div className="payments__form">
          <form onSubmit={submit}>
            {formFields.map((form, index) => {
              return (
                <div key={index} className="payments__formFields">
                  <p>Thông tin khách hàng</p>
                  <input
                    name="name"
                    placeholder="Đầy Đủ Họ Tên"
                    onChange={(event) => handleFormChange(event, index)}
                    value={form.name}
                  />
                  <input
                    name="phone"
                    placeholder="Số Điện Thoại"
                    onChange={(event) => handleFormChange(event, index)}
                    value={form.phone}
                  />
                  <input
                    name="sex"
                    placeholder="Giới tính"
                    onChange={(event) => handleFormChange(event, index)}
                    value={form.sex}
                  />
                  <input
                    name="address"
                    placeholder="Địa Chỉ"
                    onChange={(event) => handleFormChange(event, index)}
                    value={form.address}
                  />
                  <input
                    name="idCard"
                    placeholder="CMND"
                    onChange={(event) => handleFormChange(event, index)}
                    value={form.idCard}
                  />
                  <input
                    name="age"
                    placeholder="Tuổi"
                    onChange={(event) => handleFormChange(event, index)}
                    value={form.age}
                  />
                  <button className="btn-1" onClick={() => removeFields(index)}>
                    {" "}
                    Remove
                  </button>
                </div>
              );
            })}
          </form>
          <div className="payments__btn">
            <button onClick={addFields}> Thêm Người </button>
          </div>
        </div>
        <div className="payments__details">
          <h1>Details</h1>
          <div className="CardItem">
            <div className="card">
              <a href="/" className="card-top">
                <img src={paymentsArr.img} />
              </a>
              <div className="card-bottom">
                <a href="">
                  <h3>{paymentsArr.nameTour}</h3>
                </a>
                <p>
                  {" "}
                  <BarcodeOutlined /> Mã Tour : {paymentsArr.id}
                </p>
                <p>
                  {" "}
                  <CalendarOutlined /> Ngày Khời Hành : {
                    paymentsArr.startDate
                  }{" "}
                </p>
                <p>
                  {" "}
                  <CalendarOutlined /> Ngày Về : {paymentsArr.endDate}{" "}
                </p>
              </div>
            </div>
          </div>
          <button onClick={submit}> Hoàn Thành </button>
        </div>
      </div>
    </div>
  );
}

export default Payments;
