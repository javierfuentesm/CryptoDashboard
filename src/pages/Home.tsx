import * as React from "react";
import { RouteComponentProps } from "@reach/router";
import { FormComponent } from "../components/Form";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(125.99deg, #fff4f0 -3.1%, #fbe5f7 91.37%);
`;

const TextHome = styled.div`
  font-family: DM Sans, serif;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  flex: 1 1 150px;
  @media (min-width: 1025px) {
    margin-right: 40px;
    font-size: 80px;
  }
`;
const MainContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  flex-wrap: wrap;
  max-width: 1630px;
  height: auto;
  width: 100%;

  @media (min-width: 1025px) {
    height: 100%;
    width: 80%;
    font-size: 80px;
    flex-direction: row;
  }
`;

export const Home = (props: RouteComponentProps) => {
  return (
    <Wrapper>
      <MainContent>
        <TextHome>Get to know everything about crypto in real time!</TextHome>
        <FormComponent />
      </MainContent>
    </Wrapper>
  );
};
