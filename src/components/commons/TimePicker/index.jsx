import React from "react";
import PropTypes from "prop-types";
import * as S from "./styled";

TimePicker.prototype = {
  onChange: PropTypes.func,
  width: PropTypes.number,
  height: PropTypes.number,
  placeholder: PropTypes.string,
  noBorder: PropTypes.bool
};

function TimePicker({
  width,
  height,
  onChange,
  placeholder = "00:00",
  noBorder = false,
  ...rest
}) {
  const format = "HH:mm";

  return (
    <S.Wrapper>
      <S.TimePicker
        format={format}
        $width={width}
        $height={height}
        $border={noBorder}
        placeholder={placeholder}
        onChange={onChange}
        {...rest}
      />
    </S.Wrapper>
  );
}

export default TimePicker;
