import React, { useEffect, useState } from "react";
import TourItem from "../TourProduct/tourItem";
import ReactPaginate from "react-paginate";
import "./styles.scss";
import Search from "antd/lib/transfer/search";

function TourList() {
  const [items, setItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [sortValue, setSortValue] = useState("id");
  const [sortDirect, setSortDirect] = useState(-1);

  const limit = 5;
  const getTour = async (page = 1, s = "") => {
    const res = await fetch(
      `http://localhost:3011/tour?_page=${page}&_limit=${limit}&q=${s}`
    );
    const data = await res.json();
    const total = res.headers.get("x-total-count");
    setPageCount(Math.ceil(total / limit));
    setItems(data);
  };
  useEffect(() => {
    getTour(1);
  }, []);

  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    await getTour(currentPage, searchValue);
    window.scrollTo({ top: 500 });
  };

  const handleSearch = (e) => {
    setSortValue("newTour");
    e.preventDefault();
    getTour(1, searchValue);
  };

  const sortOptions = ["priceAdult", "quantity", "numberDay", "newTour"];
  const languages = {
    priceAdult: "Gía Người Lớn",
    quantity: "Sô Chỗ Còn",
    numberDay: "Thời Gian Đi",
    newTour: "Mới Nhất",
  };

  const hanldeSort = async (e) => {
    let value = e.target.value;
    setSortValue(value);
    sortList();
  };

  const hanldeDirect = (e) => {
    const value = e.target.checked ? 1 : -1;
    setSortDirect(value);
    console.log("value", value);
    sortList();
  };

  const sortList = () => {
    items.sort((a, b) => (a[sortValue] - b[sortValue]) * sortDirect);
    console.log("sortList", sortValue, sortDirect);
  };

  const newTourArr = items?.filter(
    (item) =>
      new Date(item.startDate).getTime() > new Date().getTime() - 21600000 &&
      item.quantity > 0
  );
  sortList();
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
          {sortOptions.map((item, index) => (
            <option value={item} key={index}>
              {languages[item]}
            </option>
          ))}
        </select>
        <label>
          <input
            type="checkbox"
            name="sortdirect"
            onChange={hanldeDirect}
            value={sortDirect}
          />
          <span></span>
        </label>
      </div>
      <div className="TourList">
        {newTourArr.length === 0 ? (
          <div className="error">
            <h3>Không có kết quả bạn tìm kiếm !</h3>
          </div>
        ) : (
          newTourArr?.map((item) => <TourItem key={item.id} item={item} />)
        )}
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
