import styled from "styled-components";
import { Radio } from "antd";

export const Wrapper = styled.div`
  padding-left: 25px;
  width: 100%;
  height: 100%;
  border: 1px solid #e7e7e7;
  box-sizing: border-box;
  border-radius: 26px;
  margin-bottom: 8px;
  height: 44px;
  display: flex;
  align-items: center;
  background: #f8f8f8;

  img {
    position: absolute;
    right: 37px;
    cursor: pointer;
  }
`;

export const RadioCustom = styled(Radio)`
  display: flex;
  width: 100%;
  margin-left: 10px;
  margin-right: 0px !important;
  .ant-radio-inner {
    min-width: 18px;
    min-height: 18px;
    border-color: #2c2c2c;
  }

  .ant-radio-wrapper:hover .ant-radio,
  .ant-radio:hover .ant-radio-inner,
  .ant-radio-input:focus + .ant-radio-inner {
    border-color: #ee9416;
  }

  .ant-radio-checked .ant-radio-inner::after {
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

  .ant-radio-input:focus + .ant-radio-inner {
    box-shadow: 0 0 0 3px rgb(255 24 24 / 8%);
  }

  span:nth-child(2) {
    width: 100%;
    display: flex;
    align-items: center;
    padding-right: 0px !important;
  }
`;

export const RadioGroupCustom = styled(Radio.Group)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LabelRadio = styled.label`
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const ErrorMessage = styled.p`
  display: block;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.primaryButtonColor};
  margin-top: 6px;
`;

export const Input = styled.input`
  margin-left: 26px;
  border: 1px solid #e7e7e7;
  border-top-right-radius: 26px;
  border-bottom-right-radius: 26px;
  height: 44px;
  padding-left: 16px;
  width: 102%;

  &::placeholder {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.02em;
    color: #b5b5b5;
  }
`;

export const WrapAddImg = styled.div`
  /* width: 100%; */
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  /* padding-left: 100px !important; */
  padding: 6px 0px 12px 0px;

  img {
    width: 60px;
  }
`;

export const WrapImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  padding: 6px 0px 12px 0px;
  margin-right: 10px;
  width: 100%;
`;
