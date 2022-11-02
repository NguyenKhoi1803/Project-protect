import React from "react";
import "antd/dist/antd.css";
import "./styles.scss";

import { useSelector } from "react-redux";

import { Select } from "antd";
import { generatePath, useNavigate } from "react-router-dom";

const { Option } = Select;
const SortByDay = () => {
  const navigate = useNavigate();

  const sortTour = useSelector((state) => state.fetchTourReducer.tours);
  let listPost = [];

  if (sortTour?.length > 0) {
    listPost = sortTour?.map((item) => item?.numberDay);
  }

  let myArrayWithNoDuplicates = listPost.reduce(function (
    accumulator,
    element
  ) {
    if (accumulator.indexOf(element) === -1) {
      accumulator.push(element);
    }
    return accumulator;
  },
  []);

  const onChange = (value) => {
    navigate(
      generatePath("/searchList/:id", {
        id: value,
      })
    );
  };

  return (
    <div className="container__select">
      <Select
        className="select"
        showSearch
        placeholder="Đây là chọn ngày !"
        optionFilterProp="children"
        onChange={onChange}
        
      >
        {myArrayWithNoDuplicates.map((item, i) => (
          <Option key={i} value={item}>
            {item}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default SortByDay;
