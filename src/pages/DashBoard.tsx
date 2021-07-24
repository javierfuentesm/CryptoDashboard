import { RouteComponentProps } from "@reach/router";
import * as React from "react";
import { useInfoContext } from "../context/context";
import { TabGroup } from "../components/Tab";
import { useEffect, useState } from "react";

export const Dashboard = (props: RouteComponentProps) => {
  return (
    <div>
      hola dashboard
      <TabGroup />
    </div>
  );
};
