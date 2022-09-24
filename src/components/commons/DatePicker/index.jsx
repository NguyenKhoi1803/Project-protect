import React, { useRef } from "react";
import date from "assets/icons/date.svg";
import PropTypes from "prop-types";
import * as S from "./styled";

DatePicker.propTypes = {
  className: PropTypes.string,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  height: PropTypes.number,
  onChange: PropTypes.func,
  width: PropTypes.number,
  noBorder: PropTypes.bool,
  value: PropTypes.string
};

function DatePicker({
  className,
  error,
  height,
  placeholder = "dd/mm/yyyy",
  label,
  onChange,
  width,
  value,
  noBorder = false,
  ...rest
}) {
  const ref = useRef();
  const dateFormatList = ["DD/MM/YYYY"];

  return (
    <S.InputWrapper className={className}>
      {label && (
        <div>
          <S.Label>{label}</S.Label>{" "}
        </div>
      )}
      <S.DatePicker
        value={value}
        onChange={onChange}
        format={dateFormatList}
        placeholder={placeholder}
        suffixIcon={<img src={date} alt="" />}
        $height={height}
        $width={width}
        $border={noBorder}
        ref={ref}
        {...rest}
      />
    </S.InputWrapper>
  );
}

export default DatePicker;
