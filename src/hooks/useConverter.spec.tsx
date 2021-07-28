import React from "react";
import { useConverter } from "./useConverter";
import "whatwg-fetch";
import { renderHook } from "@testing-library/react-hooks";
import fetchMock from "fetch-mock";
import { COINGECKO_MXN, CRYPTOCOMPARE_MXN } from "../constants";
import { formatDataForConverter } from "../utils";

const mockResponse1: any = [
  {
    id: "bitcoin",
    symbol: "btc",
    name: "Bitcoin",
    image:
      "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    current_price: 784941,
    market_cap: 14871109341905,
    market_cap_rank: 1,
    fully_diluted_valuation: 16638421918094,
    total_volume: 784088244608,
    high_24h: 814972,
    low_24h: 748222,
    price_change_24h: 29593,
    price_change_percentage_24h: 3.91774,
    market_cap_change_24h: 694455708456,
    market_cap_change_percentage_24h: 4.89859,
    circulating_supply: 18769406.0,
    total_supply: 21000000.0,
    max_supply: 21000000.0,
    ath: 1303117,
    ath_change_percentage: -39.31375,
    ath_date: "2021-04-14T11:54:46.763Z",
    atl: 859.32,
    atl_change_percentage: 91927.92434,
    atl_date: "2013-07-05T00:00:00.000Z",
    roi: null,
    last_updated: "2021-07-28T17:44:05.904Z",
  },
  {
    id: "ethereum",
    symbol: "eth",
    name: "Ethereum",
    image:
      "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
    current_price: 45485,
    market_cap: 5398622703281,
    market_cap_rank: 2,
    fully_diluted_valuation: null,
    total_volume: 479852685204,
    high_24h: 46782,
    low_24h: 44139,
    price_change_24h: 904.07,
    price_change_percentage_24h: 2.02795,
    market_cap_change_24h: 180667535128,
    market_cap_change_percentage_24h: 3.46242,
    circulating_supply: 116877744.749,
    total_supply: null,
    max_supply: null,
    ath: 87232,
    ath_change_percentage: -47.64732,
    ath_date: "2021-05-12T14:41:48.623Z",
    atl: 7.16,
    atl_change_percentage: 638003.78672,
    atl_date: "2015-10-20T00:00:00.000Z",
    roi: {
      times: 75.68452499836275,
      currency: "btc",
      percentage: 7568.452499836274,
    },
    last_updated: "2021-07-28T17:43:43.006Z",
  },
  {
    id: "ripple",
    symbol: "xrp",
    name: "XRP",
    image:
      "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731",
    current_price: 14.1,
    market_cap: 657500178410,
    market_cap_rank: 6,
    fully_diluted_valuation: 1419705225438,
    total_volume: 123014931482,
    high_24h: 14.88,
    low_24h: 12.5,
    price_change_24h: 1.51,
    price_change_percentage_24h: 11.97439,
    market_cap_change_24h: 74395258797,
    market_cap_change_percentage_24h: 12.75847,
    circulating_supply: 46312443360.0,
    total_supply: 100000000000.0,
    max_supply: 100000000000.0,
    ath: 65.2,
    ath_change_percentage: -78.21789,
    ath_date: "2018-01-07T00:00:00.000Z",
    atl: 0.03320635,
    atl_change_percentage: 42666.92656,
    atl_date: "2013-08-16T00:00:00.000Z",
    roi: null,
    last_updated: "2021-07-28T17:44:05.581Z",
  },
];
const mockResponse2: any = {
  BTC: { MXN: 779013.63 },
  ETH: { MXN: 45201.53 },
  XRP: { MXN: 13.83 },
};

describe("Different test cases for useConverter", () => {
  beforeAll(() => {
    global.fetch = fetch;
  });
  afterEach(() => {
    fetchMock.restore();
  });

  it("should return data with a successful request", async () => {
    fetchMock.mock(COINGECKO_MXN, mockResponse1);
    fetchMock.mock(CRYPTOCOMPARE_MXN, mockResponse2);
    const { result, waitForNextUpdate } = renderHook(() => useConverter());

    await waitForNextUpdate();
    expect(result.current.loading).toBeFalsy();
    expect(result.current.data).toEqual(
      formatDataForConverter([mockResponse1, mockResponse2])
    );
  });

  it("should handle and error for request", async () => {
    fetchMock.mock(COINGECKO_MXN, 500);
    fetchMock.mock(CRYPTOCOMPARE_MXN, 500);
    const { result, waitForNextUpdate } = renderHook(() => useConverter());

    await waitForNextUpdate();
    expect(result.current.loading).toBeFalsy();
    expect(result.current.data).toBe(undefined);
    expect(result.current.error).toBeTruthy();
  });
});
