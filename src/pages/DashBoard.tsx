import { RouteComponentProps } from "@reach/router";
import * as React from "react";
import { DashboardComponent } from "../components/DashBoard";
import styled from "styled-components";
import { Sidebar } from "../components/Sidebar";
import { Profilebar } from "../components/Profilebar";
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 1025px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
export const Dashboard = (props: RouteComponentProps) => {
  return (
    <Wrapper>
      <Sidebar />
      <DashboardComponent />
      <Profilebar />
    </Wrapper>
  );
};
