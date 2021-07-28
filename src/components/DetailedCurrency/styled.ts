import styled from "styled-components";

export const ContentComponent = styled.div`
  max-height: 14rem;
  min-height: 14rem;
  width: 100%;
  overflow: auto;
  margin-top: 30px;
  margin-bottom: 36px;
  background: linear-gradient(
    273.87deg,
    #9381ff 2.86%,
    rgba(147, 129, 255, 0.71) 99.07%
  );
  border-radius: 8px;
  @media (min-width: 1025px) {
    grid-column: 1/4;
  }
`;

export const TitleAPI = styled.div`
  font-size: 1.3rem;
  color: white;
  font-family: DM Sans, serif;
  margin-left: 35px;
  margin-top: 22px;
  margin-bottom: 22px;
`;
