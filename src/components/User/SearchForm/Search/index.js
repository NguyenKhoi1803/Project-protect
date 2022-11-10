import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  AimOutlined,
  BarcodeOutlined,
  CalendarOutlined,
  CarOutlined,
  ClockCircleOutlined,
  DollarOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Button } from "react-bootstrap";
import { generatePath, useNavigate } from "react-router-dom";
import "./styles.scss";
import { DatePicker } from "antd";

function Search(props) {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [sortValue, setSortValue] = useState("");

  const sortOptions = ["priceAdult", "quantity", "numberDay"];
  const languages = {
    priceAdult: "Gía Người Lớn",
    quantity: "Sô Chỗ Còn",
    numberDay: "Thời Gian Đi",
  };
  useEffect(() => {
    loadTourData();
  }, []);

  const loadTourData = async () => {
    return await axios
      .get("http://localhost:3011/tour")
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    return await axios
      .get(`http://localhost:3011/tour?q=${value}`)
      .then((response) => {
        setData(response.data);
        setValue("");
      })
      .catch((err) => console.log(err));
  };

  const hanldeSort = async (e) => {
    let value = e.target.value;
    setSortValue(value);
    console.log("value", value);
    data.sort((a, b) => a[value] - b[value]);
    console.log(data.map((item) => item[value]));
  };

  const handleReset = () => {
    loadTourData();
    setSortValue("");
  };
  const pt = new RegExp(value.trim(), "i");

  const newTourArr = data?.filter(
    (item) =>
      new Date(item.startDate).getTime() > new Date().getTime() - 21600000 &&
      item.quantity > 0 &&
      pt.test(item.to)
  );

  const handleAddToCart = (e) => {
    navigate(
      generatePath("/products/details/:id", {
        id: e,
      })
    );
  };

  return (
    <div className="container__search">
      <div className="SearchForm__wrap">
        <form className="SearchForm" onSubmit={handleSearch}>
          <input
            type="text"
            name=""
            value={value}
            placeholder="Nhập Nơi đi hoặc Đến "
            onChange={(e) => setValue(e.target.value)}
          />
          
          <button type="submit" className="btn-1">
            {" "}
            Search{" "}
          </button>
          <button onClick={handleReset} className="btn-2">
            {" "}
            Reset{" "}
          </button>
        </form>
      </div>
      <div className="container__search--wrap">
        <div className="searchList">
          <div className="sortBy">
            <h5>Sort By : </h5>
            <select onChange={hanldeSort} value={sortValue}>
              <option>Lọc</option>
              {sortOptions.map((item, index) => (
                <option value={item} key={index}>
                  {languages[item]}
                </option>
              ))}
            </select>
          </div>

          {newTourArr.length === 0 ? (
            <div className="error">
              <h3>Không có kết quả bạn tìm kiếm !</h3>
            </div>
          ) : (
            newTourArr.map((item) => (
              <div>
                <div className="container__tourItem" key={item}>
                  <img
                    className="container__tourItem--img"
                    src={item.img}
                    alt=""
                  />

                  <div className="container__tourItem-details">
                    <div className="container__tourItem--info">
                      <div className="info-1">
                        <h4>{item.nameTour}</h4>
                        <Button
                          variant="success"
                          className="addToCart"
                          onClick={() => handleAddToCart(item.id)}
                        >
                          Chi Tiết
                        </Button>
                      </div>
                      <div className="info-2">
                        <div>
                          <p>
                            {" "}
                            <BarcodeOutlined /> <span> Mã Tour</span> :{" "}
                            {item.id}
                          </p>
                          <p>
                            {" "}
                            <AimOutlined /> <span> Nơi Khởi Hành</span> :{" "}
                            {item.from}
                          </p>
                          <p>
                            {" "}
                            <AimOutlined /> <span>Nơi Đến</span> : {item.to}
                          </p>
                          <p>
                            <ClockCircleOutlined /> <span> Thời Gian </span> :{" "}
                            {item.numberDay} Ngày
                          </p>
                          <p>
                            <TeamOutlined /> <span> Số chỗ còn nhận </span> :{" "}
                            {item.quantity}
                          </p>
                        </div>

                        <div>
                          <p>
                            {" "}
                            <CarOutlined /> <span>
                              Phương tiện di chuyển
                            </span> : {item.vehicle}
                          </p>
                          <p>
                            {" "}
                            <CalendarOutlined /> <span>
                              Ngày Khởi Hành
                            </span> : {item.startDate}
                          </p>

                          <p>
                            {" "}
                            <CalendarOutlined /> <span>Ngày Về</span> :{" "}
                            {item.endDate}
                          </p>
                          <p>
                            {" "}
                            <DollarOutlined />
                            <span>Gía 1 Người</span> :{" "}
                            {new Intl.NumberFormat("vi-EN", {
                              style: "currency",
                              currency: "VND",
                            }).format(item.priceAdult)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;
