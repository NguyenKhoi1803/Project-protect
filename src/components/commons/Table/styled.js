import styled from "styled-components";
import { Table as Tb } from "antd";

export const Table = styled(Tb)`
  .ant-table-thead > tr > th {
    padding-top: 10px !important;
    padding-bottom: 10px !important;
    color: #ffffff;
    background-color: #ee9416;
    border-color: #d4d3d0 !important;
    vertical-align: middle;

    &:hover {
      background-color: #ee9416 !important;
    }
  }

  tr {
    background-color: #fff;
  }

  .table-row-dark {
    background-color: #f8f8f8;
  }

  .ant-table-cell {
    text-align: center;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.5px;
    color: #2c2c2c;
    background-clip: padding-box;
    border-color: #d4d3d0 !important;
    vertical-align: middle;
  }
`;

export const WrapTable = styled.div`
  border-radius: 8px;
  max-width: 100%;
  overflow: hidden;
  overflow-x: auto;
  border: 1px solid #d5d3d0;
`;

export const Dflex = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ gap }) => gap || "15px"};

  .ant-pagination-simple-pager {
    & > input {
      border-radius: 5px;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DeleteButton = styled.div`
  display: flex;
  width: 63px;
  text-align: center;
  border-radius: 8px;
  background: #f8d000;
  padding: 4px 16px;
  cursor: pointer;
`;
