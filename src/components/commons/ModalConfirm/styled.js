import styled from "styled-components";
import { Modal as BaseModal } from "antd";

export const Modal = styled(BaseModal)`
  .ant-modal-content {
    border-radius: 8px;
  }

  svg {
    color: #9b9b9b;
  }

  .ant-modal-body {
    padding: 50px 80px 24px 80px;
  }
`;

export const Footer = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: center;
  gap: 24px;
`;
