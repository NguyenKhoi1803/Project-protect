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

function Search(props) {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [curentPage, setCurentPage] = useState(0);
  const [pageLimit] = useState(4);
  const [sortFilterValue, setSortFilterValue] = useState("");
  const [operation, setOperation] = useState("");

  const sortOptions = ["priceAdult", "quantity", "numberDay"];
  const languages = {
    priceAdult: "gia ng lon",
    quantity: "so luong con lai",
    numberDay: "so ngay",
  };
  useEffect(() => {
    loadTourData(0, 4, 0);
  }, []);

  const loadTourData = async (
    start,
    end,
    increase,
    optType = null,
    sortValues
  ) => {
    switch (optType) {
      case "search":
        setOperation(optType);
        setSortValue("");
        return await axios
          .get(
            `http://localhost:3011/tour?q=${value}&_start=${start}&_end=${end}`
          )
          .then((response) => {
            setData(response.data);
            setCurentPage(curentPage + increase);
          })
          .catch((err) => console.log(err));

      default:
        return await axios
          .get(`http://localhost:3011/tour?_start=${start}&_end=${end}`)
          .then((response) => {
            setData(response.data);
            setCurentPage(curentPage + increase);
          })
          .catch((err) => console.log(err));
    }
  };

  console.log("data : ", data);

  const handleSearch = async (e) => {
    e.preventDefault();
    loadTourData(0, 4, 0, "search");
  };

  const hanldeSort = async (e) => {
    let value = e.target.value;
    console.log(value);
    data.sort((a, b) => b[value] - a[value]);
    console.log(data.map((item) => item[value]));
    // setSortValue(value);
    // loadTourData(0, 4, 0, "sort", value);
  };

  const renderPagination = () => {
    if (data.length < 4 && curentPage === 0) return null;
    if (curentPage === 0) {
      return (
        <div className="renderPagin">
          <div className="paginItem">
            <p>1</p>
          </div>
          <div className="paginItem">
            <Button
              variant="primary"
              onClick={() => loadTourData(4, 8, 1, operation, sortFilterValue)}
            >
              Next
            </Button>
          </div>
        </div>
      );
    } else if (curentPage < pageLimit - 1 && data.length === pageLimit) {
      return (
        <div className="renderPagin">
          <div className="paginItem">
            <Button
              variant="primary"
              onClick={() =>
                loadTourData(
                  (curentPage - 1) * 4,
                  curentPage * 4,
                  -1,
                  operation,
                  sortFilterValue
                )
              }
            >
              Previous
            </Button>
          </div>
          <div className="paginItem">
            <p>{curentPage + 1}</p>
          </div>
          <div className="paginItem">
            <Button
              variant="primary"
              onClick={() =>
                loadTourData(
                  (curentPage + 1) * 4,
                  (curentPage + 2) * 4,
                  1,
                  operation,
                  sortFilterValue
                )
              }
            >
              Next
            </Button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="renderPagin">
          <div className="paginItem">
            <Button
              variant="primary"
              onClick={() =>
                loadTourData(
                  (curentPage - 1) * 4,
                  curentPage * 4,
                  -1,
                  operation,
                  sortFilterValue
                )
              }
            >
              Previous
            </Button>
          </div>
          <div className="paginItem">
            <p>{curentPage + 1}</p>
          </div>
        </div>
      );
    }
  };

  const newTourArr = data?.filter(
    (item) =>
      new Date(item.startDate).getTime() > new Date().getTime() - 21600000 &&
      item.quantity > 0
  );
  const handleAddToCart = (e) => {
    navigate(
      generatePath("/products/details/:id", {
        id: e,
      })
    );
  };

  const handleReset = () => {
    setOperation("");
    setValue("");
    setSortValue("");
    setSortFilterValue("");
    loadTourData(0, 4, 0);
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
            <select onChange={hanldeSort}>
              <option>pls !</option>
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
          <div
            style={{
              padding: "20px",
            }}
          >
            {renderPagination()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
