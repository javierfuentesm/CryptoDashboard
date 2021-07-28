import React, { FC } from "react";
import { CardWrapper, MainPrice, TinyText, Wrapper } from "./styled";

type CardProps = {
  active: boolean;
  price: string;
  onClick: () => void;
};
export const Card: FC<CardProps> = ({ active, onClick, price }) => {
  return (
    <CardWrapper onClick={onClick} active={active}>
      <Wrapper>
        <MainPrice active={active}>${price}</MainPrice>
        <TinyText active={active}>
          This price is the average of the 3 sources
        </TinyText>
      </Wrapper>
    </CardWrapper>
  );
};
