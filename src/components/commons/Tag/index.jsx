/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import PropTypes from "prop-types";
import { Text } from "../Typo";

import close from "./images/close.png";

import * as S from "./styled";

Tag.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func
};

function Tag({ label, onClick, ...rest }) {
  return (
    <S.Wrapper>
      <S.Tag>
        <Text>{label}</Text>
        <img
          src={close}
          alt=""
          style={{ width: "auto", height: "9px" }}
          onClick={onClick}
        />
      </S.Tag>
    </S.Wrapper>
  );
}

export default Tag;
