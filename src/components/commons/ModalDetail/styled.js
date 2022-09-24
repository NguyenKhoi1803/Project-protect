import styled from "styled-components";

import { Modal as BaseModal } from "antd";

export const Detail = styled(BaseModal)`
  width: 100%;
  position: relative;
  .ant-modal-content {
    border-radius: 16px;
  }

  .ant-modal-body {
    padding: 32px;
  }
`;

export const Edit = styled.div`
  position: absolute;
  text-align: right;
  padding-right: 24px;
  right: 54px;
  top: 18px;
  border-right: 1px solid #e7e7e7;

  & > img {
    &:hover {
      cursor: pointer;
    }
  }
`;
