import styled from "styled-components";
import { TimePicker as Time } from "antd";

export const Wrapper = styled.div`
  padding-bottom: 16px;
`;

export const TimePicker = styled(Time)`
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
