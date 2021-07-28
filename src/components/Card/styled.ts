import styled from "styled-components";

export const CardWrapper = styled.div<{ active: boolean }>`
  background: ${(props) => (props.active ? "#9381ff" : "#F8F7FF")};
  border-radius: 10px;
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 24px;
  @media (min-width: 1025px) {
    width: 200px;
  }
`;

export const MainPrice = styled.span<{ active: boolean }>`
  font-family: DM Sans, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 52px;
  letter-spacing: 0.04em;
  color: ${(props) => (props.active ? "#FFFFFF" : "#9381FF")};
  margin-right: 32px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

export const TinyText = styled.span<{ active: boolean }>`
  font-family: DM Sans, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 16px;
  color: ${(props) => (props.active ? "#FFFFFF" : "#9381FF")};
`;
