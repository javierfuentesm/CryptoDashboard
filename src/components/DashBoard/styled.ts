import styled from "styled-components";

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 1025px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const NameTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: DM Sans, serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  color: #7165be;
`;

export const Wrapper = styled.div`
  @media (min-width: 1025px) {
    margin-left: 24px;
  }
`;

export const TableContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin-left: 35px;
  margin-right: 35px;
`;

export const TableHeader = styled.span`
  font-family: DM Sans, serif;
  font-size: 16px;
  font-weight: bold;
  color: white;
  margin-bottom: 14px;
`;

export const TableItem = styled.span`
  font-family: DM Sans, serif;
  font-size: 13px;
  color: white;
  margin-bottom: 14px;
  margin-top: 14px;
`;

export const Separator = styled.span`
  grid-column: 1/3;
  border: 1px solid #ffffff;
`;

export const CurrencyWrapper = styled.div``;
