import React from "react";
import { useCrypto } from "./useCrypto";
import "whatwg-fetch";
import { renderHook } from "@testing-library/react-hooks";
import fetchMock from "fetch-mock";
import { COINGECKO_USD, CRYPTOCOMPARE_USD, STORMGAIN_USD } from "../constants";
import { formatData } from "../utils";

const mockResponse1: any = [
  {
    id: "bitcoin",
    symbol: "btc",
    name: "Bitcoin",
    image:
      "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    current_price: 40575,
    market_cap: 757154914829,
    market_cap_rank: 1,
    fully_diluted_valuation: 847149141397,
    total_volume: 41143642571,
    high_24h: 40361,
    low_24h: 37452,
    price_change_24h: 2804.05,
    price_change_percentage_24h: 7.42379,
    market_cap_change_24h: 48890163889,
    market_cap_change_percentage_24h: 6.90281,
    circulating_supply: 18769131,
    total_supply: 21000000,
    max_supply: 21000000,
    ath: 64805,
    ath_change_percentage: -37.75078,
    ath_date: "2021-04-14T11:54:46.763Z",
    atl: 67.81,
    atl_change_percentage: 59391.27004,
    atl_date: "2013-07-06T00:00:00.000Z",
    roi: null,
    last_updated: "2021-07-28T11:30:01.102Z",
  },
  {
    id: "ethereum",
    symbol: "eth",
    name: "Ethereum",
    image:
      "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
    current_price: 2317.74,
    market_cap: 270513142197,
    market_cap_rank: 2,
    fully_diluted_valuation: null,
    total_volume: 27578333071,
    high_24h: 2329.01,
    low_24h: 2209.39,
    price_change_24h: 63.12,
    price_change_percentage_24h: 2.79939,
    market_cap_change_24h: 7292720420,
    market_cap_change_percentage_24h: 2.77058,
    circulating_supply: 116874359.124,
    total_supply: null,
    max_supply: null,
    ath: 4356.99,
    ath_change_percentage: -46.85848,
    ath_date: "2021-05-12T14:41:48.623Z",
    atl: 0.432979,
    atl_change_percentage: 534653.80586,
    atl_date: "2015-10-20T00:00:00.000Z",
    roi: {
      times: 75.93259902678233,
      currency: "btc",
      percentage: 7593.259902678232,
    },
    last_updated: "2021-07-28T11:29:23.696Z",
  },
  {
    id: "ripple",
    symbol: "xrp",
    name: "XRP",
    image:
      "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731",
    current_price: 0.729032,
    market_cap: 33850803746,
    market_cap_rank: 6,
    fully_diluted_valuation: 73092243230,
    total_volume: 5673170079,
    high_24h: 0.745664,
    low_24h: 0.625822,
    price_change_24h: 0.090374,
    price_change_percentage_24h: 14.15061,
    market_cap_change_24h: 4316276800,
    market_cap_change_percentage_24h: 14.61434,
    circulating_supply: 46312443360,
    total_supply: 100000000000,
    max_supply: 100000000000,
    ath: 3.4,
    ath_change_percentage: -78.49248,
    ath_date: "2018-01-07T00:00:00.000Z",
    atl: 0.00268621,
    atl_change_percentage: 27110.20846,
    atl_date: "2014-05-22T00:00:00.000Z",
    roi: null,
    last_updated: "2021-07-28T11:29:25.499Z",
  },
];
const mockResponse2: any = {
  BCH_BTC: {
    base_id: 1831,
    quote_id: 1,
    isFrozen: 0,
    last_price: "0.01284",
    base_volume: "0.67",
    quote_volume: "0.0086028",
  },
  BCH_USDT: {
    base_id: 1831,
    quote_id: 825,
    isFrozen: 0,
    last_price: "513.58",
    base_volume: "168.43",
    quote_volume: "86502.2794",
  },
  BTC_USDC: {
    base_id: 1,
    quote_id: 3408,
    isFrozen: 0,
    last_price: "39877.548",
    base_volume: "0.063",
    quote_volume: "2512.285524",
  },
  BTC_USDT: {
    base_id: 1,
    quote_id: 825,
    isFrozen: 0,
    last_price: "40672.32",
    base_volume: "496.195",
    quote_volume: "20181401.8224",
  },
  DAI_USDT: {
    base_id: 4943,
    quote_id: 825,
    isFrozen: 0,
    last_price: "1.002",
    base_volume: "63.04",
    quote_volume: "63.16608",
  },
  DASH_USDT: {
    base_id: 131,
    quote_id: 825,
    isFrozen: 0,
    last_price: "154.10818",
    base_volume: "32.01",
    quote_volume: "4933.0028418",
  },
  ETH_USDC: {
    base_id: 1027,
    quote_id: 3408,
    isFrozen: 0,
    last_price: "2293.241",
    base_volume: "0.09",
    quote_volume: "206.39169",
  },
  ETH_USDT: {
    base_id: 1027,
    quote_id: 825,
    isFrozen: 0,
    last_price: "2337.938",
    base_volume: "1303.86",
    quote_volume: "3048343.84068",
  },
  LTC_BTC: {
    base_id: 2,
    quote_id: 1,
    isFrozen: 0,
    last_price: "0.00351",
    base_volume: "13.35",
    quote_volume: "0.0468585",
  },
  LTC_USDT: {
    base_id: 2,
    quote_id: 825,
    isFrozen: 0,
    last_price: "138.6",
    base_volume: "13204.11",
    quote_volume: "1830089.646",
  },
  USDC_USDT: {
    base_id: 3408,
    quote_id: 825,
    isFrozen: 0,
    last_price: "0.9993",
    base_volume: "2683.1",
    quote_volume: "2681.22183",
  },
  XLM_USDT: {
    base_id: 512,
    quote_id: 825,
    isFrozen: 0,
    last_price: "0.27456",
    base_volume: "90617.87",
    quote_volume: "24880.0423872",
  },
  XRP_USDT: {
    base_id: 52,
    quote_id: 825,
    isFrozen: 0,
    last_price: "0.72923",
    base_volume: "5315536",
    quote_volume: "3876248.31728",
  },
  ZEC_USDT: {
    base_id: 1437,
    quote_id: 825,
    isFrozen: 0,
    last_price: "104.709",
    base_volume: "14.41",
    quote_volume: "1508.85669",
  },
};
const mockResponse3: any = {
  BTC: { USD: 40758.83 },
  ETH: { USD: 2340.71 },
  XRP: { USD: 0.7324 },
};

describe(" Different test cases for useDataApi", () => {
  beforeAll(() => {
    global.fetch = fetch;
  });
  afterEach(() => {
    fetchMock.restore();
  });

  it("should return data with a successful request", async () => {
    fetchMock.mock(COINGECKO_USD, mockResponse1);
    fetchMock.mock(STORMGAIN_USD, mockResponse2);
    fetchMock.mock(CRYPTOCOMPARE_USD, mockResponse3);
    const { result, waitForNextUpdate } = renderHook(() => useCrypto());

    await waitForNextUpdate();
    expect(result.current.loading).toBeFalsy();
    expect(result.current.data).toEqual(
      formatData([mockResponse1, mockResponse2, mockResponse3])
    );
  });

  it("should handle and error for request", async () => {
    fetchMock.mock(COINGECKO_USD, 500);
    fetchMock.mock(STORMGAIN_USD, 500);
    fetchMock.mock(CRYPTOCOMPARE_USD, 500);
    const { result, waitForNextUpdate } = renderHook(() => useCrypto());

    await waitForNextUpdate();
    expect(result.current.loading).toBeFalsy();
    expect(result.current.data).toBe(undefined);
    expect(result.current.error).toBeTruthy();
  });
});
