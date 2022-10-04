import React from "react";
import "antd/dist/antd.css";

import { Input, Space } from "antd";
const { Search } = Input;

const onSearch = (value) => console.log(value);

const SearchForm = () => (
  <Space direction="vertical">
    <Search placeholder="input search text" onSearch={onSearch} enterButton />
  </Space>
);

export default SearchForm;
