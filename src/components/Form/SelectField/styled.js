import styled from "styled-components";

export const SelectWrapper = styled.div`
  padding-bottom: ${({ pd }) => (!pd ? "16px" : "0px")};
`;

export const Required = styled.span`
  color: ${({ theme }) => theme.colors.red};
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  padding-bottom: 8px;
`;

export const OptionWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;

export const Error = styled.p`
  color: #bc0000;
  font-size: ${({ theme }) => theme.fontSize.sm};
  letter-spacing: 0.5px;
  text-align: start;
  padding-top: 8px;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 18px;
`;
