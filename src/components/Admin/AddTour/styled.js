import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

export const WrapContent = styled.div`
  width: 100%;
`;

export const WrapTable = styled.div`
  width: 100%;
  margin-top: 24px;
`;

export const Dflex = styled.div`
  width: 100%;
  display: flex;

  flex-direction: ${({ $flexDirection }) => $flexDirection};
  justify-content: ${({ $justifyContent }) => $justifyContent};
  align-items: ${({ $alignItems }) => $alignItems};
  flex-basis: ${({ $flexBasis }) => $flexBasis};
  padding: ${({ $padding }) => $padding};
  margin: ${({ $margin }) => $margin};
  gap: ${({ $gap }) => $gap};

  .first {
    width: 100%;
    display: flex;
    margin-bottom: 20px;

    .avatar {
      display: flex;
      justify-content: center;
      margin-right: 8px;
    }

    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;

      .bottom {
        display: flex;
        gap: 4px;
      }
    }
  }

  .second {
    flex-direction: column;
    gap: 16px;
    padding-bottom: 32px;
    border-bottom: 1px solid #e7e7e7;
    margin-bottom: 32px;
  }

  .third {
    flex-direction: column;

    .heading {
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 20px;
      color: #000;
      margin-bottom: 16px;
    }

    .statistics {
      justify-content: center;
    }

    .title {
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 16px;
      color: #2c2c2c;
      text-align: center;
    }

    .link {
      margin-top: 8px;
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 16px;
      text-align: center;
      color: #f8d000;
    }
  }
`;

export const WrapperAction = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 13px;
`;

export const WrapIcon = styled.div`
  cursor: pointer;
  width: 23px;
  border-radius: 50%;
  background: #f0f0f0;
  text-align: center;
`;

export const AddEmployee = styled.div`
  padding: 27px 0px;
  border: 1px dashed #c7c7c77f;
  background: #ffffff;
  border-radius: 16px;
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Label = styled.div`
  padding: 2px 6px;
  border-radius: 12px;
  background: #ffb71c;
  color: #fff;
  font-weight: 800;
  font-size: 10px;
  line-height: 14px;
  display: flex;
  align-items: center;
`;

export const Circle = styled.div`
  display: flex;
  height: 80px;
  width: 80px;
  border: 1px solid #e7e7e7;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 42px;
  color: #f8d000;
  margin-bottom: 8px;
`;

export const Avatar = styled.div`
  display: flex;
  margin-bottom: 16px;

  .upload {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    border-radius: 16px;
    margin-right: 8px;
  }

  .content {
    display: flex;
    flex-direction: column;

    .top {
      display: flex;
      flex-basis: 50%;
      align-items: flex-end;
    }

    .bottom {
      display: flex;
      flex-basis: 50%;
      align-items: flex-start;
    }
  }
`;

export const Content = styled.div`
  padding: 8px 0;
`;

export const Form = styled.form`
  background: #fff;
  border-radius: 16px;
  display: flex;
  width: 100%;
  justify-content: center;
`;
