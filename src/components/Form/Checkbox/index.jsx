/* eslint-disable react/prop-types */
import React from "react";
import * as S from "./styled";

export default function Checkbox({
  value,
  checked = false,
  onChange,
  name,
  id,
  label,
  disabled,
  bigger,
  isBold,
  register = () => {},
  ...rest
}) {
  return (
    <S.Label
      className="label-css"
      htmlFor={id}
      disabled={disabled}
      $isBold={isBold}
      $bigger={bigger}
    >
      <span>{label}</span>
      <S.Input
        id={id}
        type="checkbox"
        name={name}
        value={value}
        disabled={disabled}
        checked={!!checked}
        onChange={onChange}
        {...register(name)}
        {...rest}
      />
      <S.Indicator className="checkbox-css" $bigger={bigger} />
    </S.Label>
  );
}
