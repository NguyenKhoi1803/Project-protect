import React from "react";
import "antd/dist/antd.css";
import "./styles.scss";

import { useDispatch, useSelector } from "react-redux";

import { selectFilterChange } from "../../../store/user/sortSlice/index";
import { Select } from "antd";
import { generatePath, useNavigate } from "react-router-dom";

const { Option } = Select;
const SortByLocation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
        placeholder="Select Location"
        optionFilterProp="children"
        onChange={onChange}
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
    </div>
  );
};

export default SortByLocation;
