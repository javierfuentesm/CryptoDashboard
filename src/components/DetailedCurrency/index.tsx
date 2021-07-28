import React, { FC } from "react";
import { ContentComponent, TitleAPI } from "./styled";
import { cryptoCurrency } from "../../utils";
import {Separator, TableContent, TableHeader, TableItem} from "../DashBoard/styled";
type DetailedCurrencyProps = {
  title: string;
  data: [cryptoCurrency];
};
export const DetailedCurrency: FC<DetailedCurrencyProps> = ({
  data,
  title,
}) => {
  return (
    <ContentComponent>
      <TitleAPI>{title}</TitleAPI>
      <TableContent>
        <TableHeader>Price</TableHeader>
        <TableHeader>Fetching date</TableHeader>
        <Separator/>
        {data.map((item: cryptoCurrency) => (
          <React.Fragment key={item.date}>
            <TableItem>{`$ ${item.price}`}</TableItem>
            <TableItem>{item.date}</TableItem>
          </React.Fragment>
        ))}
      </TableContent>
    </ContentComponent>
  );
};
