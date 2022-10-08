import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import "./styles.scss";

import { useDispatch, useSelector } from "react-redux";

import selectFilterChange from "../../../store/user/sortSlice/index";
import { Select } from "antd";

const { Option } = Select;
const SortBy = () => {
  const dispatch = useDispatch();

  const sortTour = useSelector((state) => state.fetchTourReducer.tours);
  let listPost = [];
  if (sortTour?.length > 0) {
    listPost = sortTour?.map((item) => item?.to);
  }

  console.log("listpost", listPost);

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
    console.log(`selected ${value}`);
    dispatch(selectFilterChange(value));
  };

  const onSearch = (value) => {
    console.log("search:", value);
    // dispatch(selectFilterChange(value));
  };

  return (
    <Select
      showSearch
      placeholder="Select a person"
      optionFilterProp="children"
      onChange={onChange}
      onSearch={dispatch(onSearch)}
      filterOption={(input, option) =>
        option.children.toLowerCase().includes(input.toLowerCase())
      }
    >
      {myArrayWithNoDuplicates.map((item, i) => (
        <Option key={i} value={item}>
          {item}
        </Option>
      ))}
    </Select>
  );
};

export default SortBy;