import styled from "styled-components";
import { Link } from "@reach/router";

export const MenuContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: #f8f7ff;
  flex-direction: column;
  align-items: center;
`;

export const MenuItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 108px;
  height: 20px;
  margin-bottom: 36px;
`;

export const Header = styled.div`
  width: 143px;
  height: 23.14px;
  margin: 44px auto 58.6px auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const TextHeader = styled.div`
  font-family: DM Sans, serif;
  font-size: 20px;
  line-height: 21px;
`;

export const MenuItemText = styled.p`
  font-family: DM Sans, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #352e5b;
  margin-left: 20px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
