import styled from "styled-components";
import media from "styles/breakpoints";
import { Modal as BaseModal } from "antd";

export const Modal = styled(BaseModal)`
  .ant-modal-content {
    border-radius: 8px;
    border-radius: ${({ $borderRadius }) => $borderRadius || "8px"};
  }

  .ant-modal-header {
    margin: 0px !important;
    background-color: #494040;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom: none;
  }

  .ant-modal-title {
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.5px;
    color: #ffffff;
    font-style: bold;
    text-align: center;
  }

  svg {
    color: #ffffff;
  }

  .ant-modal-body {
    padding: 16px 24px;

    ${media.fmDesktop`
      padding: 16px 10px;
    `}
  }
`;

export const Footer = styled.div`
  margin-top: 10px;
`;
