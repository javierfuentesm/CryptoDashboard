import React, { FC } from "react";
import {
  Header,
  MenuContainer,
  MenuItem,
  MenuItemText,
  TextHeader,
  StyledLink,
} from "./styled";
import { HomeIcon } from "./HomeIcon";
import { HeaderIcon } from "./HeaderIcon";
import { TradingIcon } from "./TraidingIcon";

export const Sidebar: FC = () => {
  return (
    <MenuContainer>
      <Header>
        <HeaderIcon />
        <TextHeader>CryptoBoard</TextHeader>
      </Header>

      <StyledLink to="/">
        <MenuItem>
          <HomeIcon />
          <MenuItemText>Home</MenuItemText>
        </MenuItem>
      </StyledLink>

      <StyledLink to="/dashboard">
        <MenuItem>
          <TradingIcon />
          <MenuItemText>Assets</MenuItemText>
        </MenuItem>
      </StyledLink>
    </MenuContainer>
  );
};
