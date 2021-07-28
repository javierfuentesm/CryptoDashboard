import React, { FC } from "react";
import { MiniMenu, TextHeader } from "./styled";

export const Header: FC = () => {
  return (
    <>
      <MiniMenu>{"Home > Dashboard"}</MiniMenu>
      <TextHeader>Assets</TextHeader>
    </>
  );
};
