import * as React from "react";
import { useState } from "react";
import { useCrypto } from "../../hooks/useCrypto";
import { ContentWrapper, CurrencyWrapper, NameTag, Wrapper } from "./styled";
import { Spinner } from "../Spinner";
import { MemoizedConverter } from "../Converter";
import { Card } from "../Card";
import { Header } from "../Header";
import { DetailedCurrency } from "../DetailedCurrency";
import { TextHeader } from "../Header/styled";

const coins = ["BTC", "ETH", "XRP"];

export const DashboardComponent = () => {
  const [active, setActive] = useState<string>(coins[0]);
  const { data, error, loading } = useCrypto();
  const COINGECKO = data?.[active].COINGECKO;
  const STORMGAIN = data?.[active].STORMGAIN;
  const CRYPTOCOMPARE = data?.[active].CRYPTOCOMPARE;
  const averageBTC =
    (+data?.BTC.COINGECKO[0].price +
      +data?.BTC.STORMGAIN[0].price +
      +data?.BTC.CRYPTOCOMPARE[0].price) /
    3;

  const averageETH =
    (+data?.ETH.COINGECKO[0].price +
      +data?.ETH.STORMGAIN[0].price +
      +data?.ETH.CRYPTOCOMPARE[0].price) /
    3;

  const averageXRP =
    (+data?.XRP.COINGECKO[0].price +
      +data?.XRP.STORMGAIN[0].price +
      +data?.XRP.CRYPTOCOMPARE[0].price) /
    3;
  if (error) {
    return (
      <>
        <p>Something went wrong:</p>
        <p>{error.message}</p>
      </>
    );
  }

  return (
    <Wrapper>
      <Header />

      <ContentWrapper>
        {data !== undefined && (
          <>
            <CurrencyWrapper>
              <NameTag>BTC {loading && <Spinner />}</NameTag>
              <Card
                price={averageBTC.toFixed(2)}
                active={active === "BTC"}
                onClick={() => setActive("BTC")}
              />
            </CurrencyWrapper>

            <CurrencyWrapper>
              <NameTag>ETH {loading && <Spinner />}</NameTag>
              <Card
                price={averageETH.toFixed(2)}
                active={active === "ETH"}
                onClick={() => setActive("ETH")}
              />
            </CurrencyWrapper>

            <CurrencyWrapper>
              <NameTag>XRP {loading && <Spinner />}</NameTag>
              <Card
                price={averageXRP.toFixed(2)}
                active={active === "XRP"}
                onClick={() => setActive("XRP")}
              />
            </CurrencyWrapper>

            <MemoizedConverter active={active} />

            <TextHeader>Activity</TextHeader>
            <DetailedCurrency data={COINGECKO} title="Coingecko" />
            <DetailedCurrency data={STORMGAIN} title="Stormgain" />
            <DetailedCurrency data={CRYPTOCOMPARE} title="Cryptocompare" />
          </>
        )}
      </ContentWrapper>
    </Wrapper>
  );
};
