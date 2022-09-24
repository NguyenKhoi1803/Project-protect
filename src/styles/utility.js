import { css } from "styled-components";

const utility = css`
  :root {
    --bs-primary: #f8d000;
  }
  .container {
    padding: 0;
    @media (max-width: 576px) {
      width: 100%;
    }
    @media (min-width: 576px) {
      width: 540px;
    }
    @media (min-width: 768px) {
      width: 720px;
    }
    @media (min-width: 992px) {
      width: 960px;
    }
    @media (min-width: 1200px) {
      width: 1140px;
    }
    @media (min-width: 1400px) {
      width: 1170px;
    }
  }
  .cursorPointer {
    cursor: pointer;
  }

  /* DatePicker */
  .ant-picker {
    border-radius: ${({ theme }) => theme.borderRadius.base};
    padding: 12px;
    box-shadow: none;
    width: 100%;
  }
  .ant-picker:hover,
  .ant-picker-focused {
    /* border-color: ${({ theme }) => theme.colors.primaryButtonColor}; */
  }
  .ant-picker-panel-container {
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    padding: 16px;
  }
  .ant-picker-header-view button:hover {
    color: ${({ theme }) => theme.colors.primaryButtonColor};
  }
  .ant-picker-content th,
  .ant-picker-content td {
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
  .ant-picker-date-panel .ant-picker-content th {
    color: ${({ theme }) => theme.colors.gray3};
  }
  .ant-picker-cell {
    padding: 8px;
  }
  .ant-picker-cell-in-view.ant-picker-cell-selected .ant-picker-cell-inner,
  .ant-picker-cell-in-view.ant-picker-cell-range-start .ant-picker-cell-inner,
  .ant-picker-cell-in-view.ant-picker-cell-range-end .ant-picker-cell-inner {
    color: ${({ theme }) => theme.colors.white};
    background: #ee9416;
    border-radius: ${({ theme }) => theme.borderRadius.md};
    padding: 0px 4px;
  }
  .ant-picker-cell-in-view.ant-picker-cell-today
    .ant-picker-cell-inner::before {
    border: none;
  }
  .ant-picker-footer {
    /* display: none; */
  }
  .ant-picker.ant-picker-disabled {
    border-color: #d9d9d9 !important;
    background: #f5f5f5 !important;
  }
  .ant-picker-today-btn {
    color: #ee9416;

    &:hover {
      color: ${({ theme }) => theme.colors.red};
    }
  }

  /* TimePicker */
  .ant-picker-time-panel-column
    > li.ant-picker-time-panel-cell-selected
    .ant-picker-time-panel-cell-inner {
    background: #ee9416;
    border-radius: ${({ theme }) => theme.borderRadius.md};
    color: ${({ theme }) => theme.colors.white};
  }
  .ant-picker-now > a {
    color: #ee9416;
  }
  .ant-btn-primary {
    border-color: #ee9416;
    background: #ee9416;

    &:hover,
    &:active,
    &:focus {
      border-color: ${({ theme }) => theme.colors.red} !important;
      background: ${({ theme }) => theme.colors.red} !important;
      color: #fff !important;
    }
  }

  .ant-btn:hover,
  .ant-btn:focus {
    color: ${({ theme }) => theme.colors.primaryButtonColor};
    border-color: ${({ theme }) => theme.colors.primaryButtonColor};
  }

  .ant-switch-checked {
    background: #f8d000;
  }

  .ant-spin-dot-item {
    background-color: #ee9416;
  }

  .ant-radio-checked .ant-radio-inner {
    border-color: #25a519 !important ;
  }

  .ant-radio-checked .ant-radio-inner:after {
    background-color: #25a519;
  }

  .ant-radio:hover .ant-radio-inner {
    border-color: #25a519;
  }

  .isAnswerUser .ant-radio-checked .ant-radio-inner {
    border-color: #f8d000 !important ;
  }

  .isAnswerUser .ant-radio-checked .ant-radio-inner:after {
    background-color: #f8d000;
  }

  .isAnswerUser .ant-radio:hover .ant-radio-inner {
    border-color: #f8d000;
  }

  .ant-pagination {
    text-align: right;
  }
  .ant-pagination .ant-pagination-item,
  .ant-pagination .ant-pagination-prev,
  .ant-pagination .ant-pagination-next {
    color: #333;
  }
  .ant-pagination .ant-pagination-prev:hover .ant-pagination-item-link,
  .ant-pagination .ant-pagination-next:hover .ant-pagination-item-link,
  .ant-pagination .ant-pagination-item:hover,
  .ant-pagination .ant-pagination-item.ant-pagination-item-active {
    border-color: #f8d000;
    color: #f8d000;
  }
  .ant-pagination .anticon svg {
    margin-top: -5px;
  }

  // TREE SELECT
  .e-list-item {
    margin: 8px 0px;
  }

  .e-text-content {
    padding: 10px 0px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.09);
    border-radius: 8px;
  }

  .ck-editor {
    ul > li {
      list-style: circle;
    }

    ol > li {
      list-style: decimal;
    }

    ul,
    ol {
      padding-left: 2rem;
    }
  }
`;
export default utility;
