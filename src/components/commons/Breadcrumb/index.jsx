import React from "react";
import styled from "styled-components";
import { Breadcrumb as BreadcrumbBase } from "antd";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

Breadcrumb.propTypes = {
  breadcrumbs: PropTypes.array
};

export const LinlkTo = styled(Link)`
  /* font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: 0.5px;
  color: #b5b5b5;

  &:hover {
    color: #333333;
  }

  &.first {
    color: #2c2c2c !important;
    cursor: 'pointer';
  }

  &.last {
    color: #2c2c2c !important;
  } */
`;

export const BreadcrumbWrapper = styled(BreadcrumbBase)`
  padding: 0px 0px 16px 0px;
  border-bottom: 1px solid #c7c7c77f !important;

  a {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.5px;
    color: #b5b5b5;

    &:hover {
      color: #333333;
    }

    &.first {
      color: #2c2c2c !important;
      cursor: "pointer";
    }

    &.last {
      color: #2c2c2c !important;
    }
  }
`;

export default function Breadcrumb({ breadcrumbs }) {
  return (
    <BreadcrumbWrapper separator=">">
      {breadcrumbs.map((item, index) => (
        <BreadcrumbBase.Item
          key={index}
          className={`breadcrumb-item ${
            // eslint-disable-next-line no-nested-ternary
            index === 0
              ? "first"
              : index === breadcrumbs.length - 1
              ? "last"
              : ""
          }`}
        >
          <LinlkTo to={item?.link}>{item.content}</LinlkTo>
        </BreadcrumbBase.Item>
      ))}
    </BreadcrumbWrapper>
  );
}
