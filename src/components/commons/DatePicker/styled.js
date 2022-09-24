import styled from "styled-components";

import { DatePicker as Date } from "antd";

export const DatePicker = styled(Date)`
  &.ant-picker {
    height: ${({ $height }) => ($height ? `${$height}px` : "44px")};
    width: ${({ $width }) => ($width ? `${$width}px` : "100%")};
    border-radius: 26px;
    border: ${({ $border }) => ($border ? "none" : "1px solid #c1c1c1")};
    padding: 0 16px;
    font-size: ${({ theme }) => theme.fontSize.sm};

    &:hover {
      box-shadow: 0px 4px 8px rgba(51, 51, 51, 0.25);
    }
  }

  &.ant-picker > .ant-picker-input > input {
    &::placeholder {
      font-size: font-size: 14px;
      line-height: 20px;
      letter-spacing: 0.02em;
      color: #B5B5B5;
    }
  }
`;

export const Label = styled.label`
  color: #333333;
  font-size: ${({ theme }) => theme.fontSize.base};
  padding-bottom: 7px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const InputWrapper = styled.div`
  padding-bottom: 16px;
  position: relative;

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
