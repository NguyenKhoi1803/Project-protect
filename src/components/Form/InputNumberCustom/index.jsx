import React from "react";
import * as S from "../InputField/styled";

// generate random string id if not fill id
function InputNumberCustom({
  label = "",
  icon_cre,
  icon_dec,
  defaultValue,
  value,
  set_level_inp,
  ...rest
}) {
  return (
    <S.InputWrapper>
      <S.Label>{label}</S.Label>
      <div
        style={{
          display: "flex",
          position: "relative",
          alignItems: "center"
        }}
      >
        <S.Icon
          src={icon_cre}
          alt="icon"
          disabled={value <= rest.min}
          onClick={() => set_level_inp(Number(value) - 1)}
        />
        <S.InputNumber
          type="number"
          defaultValue={defaultValue}
          value={value}
          {...rest}
        />
        <S.IconPass
          src={icon_dec}
          alt="icon"
          onClick={() => set_level_inp(Number(value) + 1)}
        />
      </div>
    </S.InputWrapper>
  );
}

export default InputNumberCustom;
