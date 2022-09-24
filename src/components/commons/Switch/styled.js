import styled from "styled-components";
import { Switch } from "antd";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  &.label {
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    /* color: #2c2c2c; */
  }
`;

export const Switcher = styled(Switch)`
  &.ant-switch-checked {
    background-color: ${({ $background }) => $background || "#EE9416"};
  }
`;
