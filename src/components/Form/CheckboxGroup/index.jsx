/* eslint-disable react/prop-types */
import React from "react";
import * as S from "./styled";

export default function CheckboxGroup({
  label,
  options,
  direction,
  $value,
  ...rest
}) {
  return (
    <>
      <S.Label>{label}</S.Label>
      <S.CheckboxGroup
        options={options}
        {...rest}
        $direction={direction}
        value={$value}
      />
    </>
  );
}
