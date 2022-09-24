import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Tag = styled.div`
  width: auto;
  border-radius: 8px;
  background: #f8f8f8;
  padding: 6px;
  display: flex;
  gap: 8px;
  align-items: center;

  & > img {
    margin: 8px;
  }
`;
