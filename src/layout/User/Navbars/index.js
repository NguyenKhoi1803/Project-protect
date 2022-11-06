import { SearchOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { checkLogin, logout } from "../../../Auth";

import "./styles.scss";

const Navbars = () => {
  const navigate = useNavigate();

  const handleToChangeHome = () => {
    navigate("/");
  };

  const handleToChangeList = () => {
    navigate("/search");
  };

  const handleToLogin = () => {
    navigate("/login");
  };

  const handleToSearch = () => {
    navigate("/search");
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

  const closeMenu = () => setClick(false);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <nav className="navbar">
        <a className="logo" onClick={handleToChangeHome}>
          Local Tourist
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
            <a onClick={handleToChangeHome}>Home</a>
          </li>
          <li className="nav-item">
            <a onClick={handleToChangeList}>All Tour</a>
          </li>
          <li className="nav-item">
            {checkLogin() ? (
              <button
                variant="light"
                onClick={() => {
                  logout();
                  navigate("/");
                }}
              >
                Logout
              </button>
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
