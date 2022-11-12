import React, { useEffect, useState } from "react";
import TourItem from "../TourProduct/tourItem";
import ReactPaginate from "react-paginate";
import "./styles.scss";
import axios from "axios";

function TourList() {
  const [items, setItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [sortValue, setSortValue] = useState("");

  const limit = 5;

  useEffect(() => {
    const getTour = async () => {
      const res = await fetch(
        `http://localhost:3011/tour?_page=1&_limit=${limit}`
      );
      const data = await res.json();
      const total = res.headers.get("x-total-count");
      setPageCount(Math.ceil(total / 10));
      setItems(data);
    };
    getTour();
  }, []);

  const getTours = async (currentPage) => {
    const res = await fetch(
      `http://localhost:3011/tour?_page=${currentPage}limit=${limit}`
    );
    const data = await res.json();
    return data;
  };

  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    const tourFromServer = await getTours(currentPage);
    setItems(tourFromServer);
  };

  const handleSearch = async (e) => {
    setSortValue("");
    console.log("seasr");
    e.preventDefault();
    return await axios
      .get(`http://localhost:3011/tour?q=${searchValue}`)
      .then((response) => {
        setItems(response.data);
      })
      .catch((err) => console.log(err));
  };

  const sortOptions = ["priceAdult", "quantity", "numberDay"];
  const languages = {
    priceAdult: "Gía Người Lớn",
    quantity: "Sô Chỗ Còn",
    numberDay: "Thời Gian Đi",
  };

  const hanldeSort = async (e) => {
    let value = e.target.value;
    setSortValue(value);
    items.sort((a, b) => a[value] - b[value]);
  };
 

  const newTourArr = items?.filter(
    (item) =>
      new Date(item.startDate).getTime() > new Date().getTime() - 21600000 &&
      item.quantity > 0
  );

  return (
    <div className="container__TourList">
      <div className="SearchForm__wrap">
        <form className="SearchForm">
          <input
            type="text"
            name=""
            value={searchValue}
            placeholder="Nhập Nơi đi hoặc Đến "
            onChange={(e) => setSearchValue(e.target.value)}
          />

          <button type="submit" className="btn-1" onClick={handleSearch}>
            {" "}
            Search{" "}
          </button>
        </form>
      </div>
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
      <div className="TourList">
        {newTourArr?.map((item) => (
          <TourItem key={item.id} item={item} />
        ))}
      </div>
      <ReactPaginate
        style="margin-bottom: 0;padding: 20px;"
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
}

export default TourList;
