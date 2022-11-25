import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { checkLogin, logout } from "../../../Auth";

import "./styles.scss";

const Navbars = () => {
  const navigate = useNavigate();

  const handleToChangeHome = () => {
    navigate("/");
    window.scrollTo({ top: 500 });
  };

  const handleToChangeList = () => {
    navigate("/tour");
  };

  const handleToLogin = () => {
    navigate("/login");
  };

  const handleToContact = () => {
    navigate("/contact")
  }

  const handleToOrder = () => {
    if (checkLogin()) {
      navigate("/checkOrder");
    } else {
      alert("Chưa đăng nhập ! ");
      navigate("/login");
    }
  };

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  // const closeMenu = () => setClick(false);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <nav className="navbar">
        <a className="logo" onClick={handleToChangeHome}>
          <img src={require('../../../asset/img/logo.png')} alt=""/>
        </a>


        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#ffffff" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a onClick={handleToChangeHome}>Trang Chủ</a>
          </li>
          <li className="nav-item">
            <a onClick={handleToChangeList}>Danh Sách Tour</a>
          </li>
          <li className="nav-item">
            <a onClick={handleToContact}>Liên Hệ</a>
          </li>
          <li className="nav-item">
            <a onClick={handleToOrder}>Đơn Hàng</a>
          </li>

          <li className="nav-item">
            {checkLogin() ? (
              <a onClick={() => {
                logout();
                navigate("/");
              }}>Đăng Xuất</a>
            ) : (
              <a onClick={handleToLogin}>Login</a>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbars;
