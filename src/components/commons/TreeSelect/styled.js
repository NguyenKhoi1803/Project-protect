import styled from "styled-components";
import arrow from "./images/arrow.png";

export const Wrapper = styled.div`
  padding-bottom: ${({ pd }) => (!pd ? "16px" : "0px")};

  .tree-node {
    .e-input-group-icon {
      position: relative !important;
    }

    .e-clear-icon {
      bottom: 6px !important;
      right: 36px !important;
    }

    & > input {
      font-size: 14px !important;
      line-height: 20px !important;
      letter-spacing: 0.02em !important;
    }
  }

  .e-ddt-icon {
    &::before {
      content: url(${arrow});
      width: 20px;
      height: 20px;
    }
  }

  .e-input-group {
    height: 44px !important;
    border: 1px solid #e7e7e7 !important;
    padding: 0px 18px 0px 16px !important;
    border-radius: 26px !important;
    display: flex !important;
    justify-content: space-between !important;
    align-items: center !important;
    margin: 0px !important;

    &::before {
      width: 0px !important;
    }

    &::after {
      width: 0px !important;
    }
  }
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  padding-bottom: 8px;
`;

export const Required = styled.span`
  color: ${({ theme }) => theme.colors.red};
`;
