import * as React from "react";
import { Router } from "@reach/router";
import { Home } from "./pages/Home";
import PersonalInfoProvider from "./context/provider";
import { Dashboard } from "./pages/DashBoard";

export const App: React.FC = () => (
  <PersonalInfoProvider>
    <Router>
      <Home path="/" />
      <Dashboard path="dashboard" />
    </Router>
  </PersonalInfoProvider>
);
