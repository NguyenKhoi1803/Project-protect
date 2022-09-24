import React from "react";
import { MultiSelect } from "react-multi-select-component";
import PropTypes from "prop-types";

import add from "./images/add-red.png";

import * as S from "./styled";

MultipleSelect.propTypes = {
  onChange: PropTypes.string,
  options: PropTypes.array,
  value: PropTypes.array,
  set_value: PropTypes.func
};

const mockData = [
  { label: "Grapes 🍇", value: "grapes", id: 1 },
  { label: "Mango 🥭", value: "mango", id: 2 },
  { label: "Strawberry 🍓", value: "strawberry", id: 3 }
];

const overrideStrings = {
  selectSomeItems: <img src={add} alt="" />,
  noOptions: "CHƯA CÓ DỮ LIỆU",
  search: "Tìm kiếm"
};

const customValueRenderer = (selected, _options) =>
  selected.length ? <img src={add} alt="" /> : <img src={add} alt="" />;

function MultipleSelect({ options, value, set_value, ...rest }) {
  return (
    <S.Wrapper>
      <MultiSelect
        options={options || mockData}
        value={value}
        onChange={set_value}
        overrideStrings={overrideStrings}
        hasSelectAll={false}
        valueRenderer={customValueRenderer}
        {...rest}
      />
    </S.Wrapper>
  );
}

export default MultipleSelect;
