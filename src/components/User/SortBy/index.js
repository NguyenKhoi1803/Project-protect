import React from "react";
import "../SortBy/styles.scss"

function SortBy() {
  return (
    <form className="container__SortBy">
      <input type="tex" placeholder="Tìm Tour" />
      <input type="date" placeholder="Từ Ngày" />
      <input type="date" placeholder="Đến Ngày" />
      <select>
        <option value="0">---Lựa Chọn Nơi Đến---</option>
        <option value="1">Đà Nẵng</option>
        <option value="2">Hồ Chí Minh</option>
        <option value="3">Hà Nội</option>
      </select>
    </form>
  );
}

export default SortBy;
