import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./App";
import PersonalInfoProvider from "./context/provider";

ReactDOM.render(
  <PersonalInfoProvider>
    <App />
  </PersonalInfoProvider>,
  document.getElementById("root")
);
