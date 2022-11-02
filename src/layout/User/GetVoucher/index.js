import React from "react";
import { useState } from "react";
import "./styles.scss";

function Voucher(props) {
  const [complete, setComplete] = useState("");
  const [fields, setFields] = useState("");

  const handleChangeFields = (e) => {
    setFields(e.target.value);
  };

  const handleSubmit = () => {
    if (fields) {
      setComplete("Bạn đăng ký thành công !");
    } else {
      setComplete("Bạn chưa nhập email !");
    }
  };
  return (
    <div className="container__Voucher">
      <div className="container__Voucher--wrap">
        <div className="container__Voucher--details">
          <h4>ĐĂNG KÝ NHẬN ƯU ĐÃI TỪ CHÚNG TÔI</h4>
          <p>Trở thành những người có thông tin nhanh nhất</p>
          <div className="container__Voucher--form">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Điền email tại đây !"
              onChange={handleChangeFields}
            />
            <button type="submit" onClick={handleSubmit}>
              Đăng Ký
            </button>
          </div>
          <span>{complete}</span>
        </div>
      </div>
    </div>
  );
}

export default Voucher;
