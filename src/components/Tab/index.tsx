import { useState } from "react";
import { useCrypto } from "../../hooks/useCrypto";
import { TabContainer, TabItem } from "./styled";
import * as React from "react";

const coins = ["BTC", "ETH", "XRP"];

export const TabGroup = () => {
  const [active, setActive] = useState(coins[0]);
  const { data, error, loading } = useCrypto();
  console.log(data);
  console.log(loading);

  return (
    <TabContainer>
      {coins.map((type) => (
        <TabItem
          key={type}
          active={active === type}
          onClick={() => setActive(type)}
        >
          {type}
        </TabItem>
      ))}
    </TabContainer>
  );
};
