import styled, { css } from "styled-components";
import { ReactSVG as SVG } from "react-svg";

export const InputWrapper = styled.div`
  padding-bottom: 16px;

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}

  position: relative;
  ${({ $paddingBottom }) =>
    $paddingBottom &&
    css`
      padding-bottom: ${$paddingBottom};
    `}

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

export const Label = styled.label`
  color: #333333;
  font-size: ${({ theme }) => theme.fontSize.base};
  padding-bottom: 7px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const Required = styled.span`
  color: ${({ theme }) => theme.colors.red};
`;

export const Input = styled.input`
  background-color: ${({ $isHeader }) => ($isHeader ? "#F8F8F8" : "#ffffff")};
  border: 1px solid #e7e7e7 !important;
  height: ${({ $height }) => $height || "44px"};
  padding: 12px 16px;
  font-size: ${({ theme }) => theme.fontSize.sm};
  width: ${({ $width }) => $width || "100%"};
  border-radius: ${({ $borderRadius }) => $borderRadius || "28px"};

  ${({ $hasIcon }) =>
    $hasIcon &&
    css`
      padding-left: 50px;
    `}

  /* &:hover {
    box-shadow: 0px 4px 8px rgba(51, 51, 51, 0.25);
  } */

  &::placeholder {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.02em;
    color: #b5b5b5;
  }

  ${({ $error }) =>
    $error &&
    css`
      border: 1px solid #bc0000;
    `}
`;

export const InputNumber = styled(Input)`
  padding: 12px 100px;
  text-align: center;
`;

export const Icon = styled(SVG)`
  position: absolute;
  height: 100%;
  display: flex;
  align-items: center;
  top: 0;
  left: 19px;
  color: ${({ $error }) => ($error ? "#bc0000" : "#c1c1c1")};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
`;

export const IconPass = styled(SVG)`
  position: absolute;
  height: 100%;
  display: flex;
  align-items: center;
  top: 0;
  right: 19px;
  color: ${({ $error }) => ($error ? "#bc0000" : "#c1c1c1")};
`;

export const TextArea = styled(Input).attrs({ as: "textarea" })`
  height: ${({ $height }) => $height || "254px"};
  resize: none;

  &:focus {
    border: none;
    outline: none;
  }
`;

export const Error = styled.p`
  color: #bc0000;
  font-size: ${({ theme }) => theme.fontSize.sm};
  letter-spacing: 0.5px;
  text-align: start;
  padding-top: 8px;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 18px;
`;
