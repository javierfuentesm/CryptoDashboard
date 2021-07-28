import * as React from "react";
import { Redirect, Router } from "@reach/router";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/DashBoard";
import { useInfoContext } from "./context/context";

export const App: React.FC = () => {
  const { personalInfo } = useInfoContext();

  return (
    <Router>
      <Home path="/" />
      {personalInfo ? (
        <Dashboard path="dashboard" />
      ) : (
        <Redirect from="dashboard" to="/" />
      )}
    </Router>
  );
};
