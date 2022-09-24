import React from "react";
import styled, { css } from "styled-components";

import add from "../../../assets/icons/add.svg";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  gap: 10px;
  font-weight: bold;
  cursor: pointer;
  max-width: 150px;
  color: ${({ $color }) => $color || "#2C2C2C"};
  font-size: ${({ size }) => (size === "sm" ? "12px" : "14px")};
  ${({ isBorder }) =>
    isBorder &&
    css`
      border: 1px dashed #c1c1c1c1;
      border-radius: 6px;
      padding: 6px 10px;
    `}
`;

export default function ButtonAdd({
  text,
  size = "sm",
  isBorder,
  onClick,
  ...rest
}) {
  return (
    <Wrapper size={size} isBorder={isBorder} onClick={onClick} {...rest}>
      <img src={add} alt="" />
      {text}
    </Wrapper>
  );
}
