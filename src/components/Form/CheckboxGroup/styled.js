import styled from "styled-components";
import { Checkbox } from "antd";

export const CheckboxGroup = styled(Checkbox.Group)`
  &.ant-checkbox-group {
    display: flex;
    flex-direction: ${({ $direction }) => $direction || "column"};
  }

  span.ant-checkbox-checked .ant-checkbox-inner {
    background-color: transparent !important;
    border-color: #c1c1c1;
    width: 12px;
    height: 12px;
  }

  .ant-checkbox-inner::after {
    border-color: #ff0000;
    width: 8px;
    height: 8px;
  }

  .ant-checkbox .ant-checkbox-inner {
    width: 12px;
    height: 12px;
    background-color: transparent;
    border-color: #c1c1c1;
  }
`;

export const Label = styled.p`
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 18px;
  letter-spacing: 0.5px;
  color: #333333;
  padding-bottom: 10px;
`;
