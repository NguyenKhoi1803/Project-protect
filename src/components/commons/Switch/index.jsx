import React from "react";
import PropTypes from "prop-types";

import * as S from "./styled";

Switch.propTypes = {
  color: PropTypes.string,
  leftLabel: PropTypes.string,
  rightLabel: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func
};

function Switch({ color, leftLabel, rightLabel, checked, onChange, ...rest }) {
  return (
    <S.Wrapper>
      <div
        className="left label"
        style={{ color: checked === 1 ? "#c1c1c1" : "#2c2c2c" }}
      >
        {leftLabel}
      </div>
      <S.Switcher
        checked={checked}
        onChange={onChange}
        $color={color}
        {...rest}
      />
      <div
        className="right label"
        style={{ color: checked === 0 ? "#c1c1c1" : "#2c2c2c" }}
      >
        {rightLabel}
      </div>
    </S.Wrapper>
  );
}

export default Switch;
