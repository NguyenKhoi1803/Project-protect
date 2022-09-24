import styled from "styled-components";
import { Radio } from "antd";

export const RadioCustom = styled(Radio)`
  .ant-radio-inner {
    width: 18px;
    height: 18px;
    border-color: #2c2c2c;
  }

  .ant-radio-wrapper:hover .ant-radio,
  .ant-radio:hover .ant-radio-inner,
  .ant-radio-input:focus + .ant-radio-inner {
    border-color: #ee9416;
  }

  .ant-radio-inner::after {
    position: absolute;
    top: 6px;
    left: 6px;
    min-width: 20px;
    min-height: 20px;
    background-color: #ee9416;
  }

  .ant-radio-checked .ant-radio-inner {
    border-color: #ee9416 !important;
  }
  .ant-radio-checked::after {
    border: 1px solid #ee9416;
  }

  .ant-radio-checked .ant-radio-inner::after {
    background-color: #ee9416;
  }

  .ant-radio-input:focus + .ant-radio-inner {
    box-shadow: 0 0 0 3px rgb(255 24 24 / 8%);
  }
`;

export const RadioGroupCustom = styled(Radio.Group)`
  display: flex;
  align-items: flex-end;
  gap: 8px;
`;

export const LabelRadio = styled.label`
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  padding-bottom: 16px;
`;

export const ErrorMessage = styled.p`
  display: block;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.primaryButtonColor};
  margin-top: 6px;
`;
