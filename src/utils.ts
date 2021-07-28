export type cryptoCurrency = {
  price: string;
  date: string;
};
export type APIs = {
  COINGECKO: [cryptoCurrency];
  STORMGAIN: [cryptoCurrency];
  CRYPTOCOMPARE: [cryptoCurrency];
};

export type APIsForConversion = {
  COINGECKO: number;
  CRYPTOCOMPARE: number;
};

export type cryptoCurrenciesForConversion = {
  [index: string]: any;
  BTC: APIsForConversion;
  ETH: APIsForConversion;
  XRP: APIsForConversion;
};

export type cryptoCurrencies = {
  [index: string]: any;
  BTC: APIs;
  ETH: APIs;
  XRP: APIs;
};

export const formatData = (data: any[]) => {
  const response1 = data[0];
  const response2 = data[1];
  const response3 = data[2];
  const date = new Date(Date.now()).toTimeString();
  const BTC: APIs = {
    COINGECKO: [{ price: response1[0].current_price as string, date }],
    STORMGAIN: [{ price: response2.BTC_USDT.last_price as string, date }],
    CRYPTOCOMPARE: [{ price: response3.BTC.USD as string, date }],
  };
  const ETH: APIs = {
    COINGECKO: [{ price: response1[1].current_price as string, date }],
    STORMGAIN: [{ price: response3.ETH.USD as string, date }],
    CRYPTOCOMPARE: [{ price: response3.ETH.USD as string, date }],
  };
  const XRP: APIs = {
    COINGECKO: [{ price: response1[2].current_price as string, date }],
    STORMGAIN: [{ price: response2.XRP_USDT.last_price as string, date }],
    CRYPTOCOMPARE: [{ price: response3.XRP.USD as string, date }],
  };
  return { BTC, ETH, XRP };
};

export const refreshData = (state: cryptoCurrencies, data: any[]) => {
  const date = new Date(Date.now()).toTimeString();
  const newState = JSON.parse(JSON.stringify(state));

  const response1 = data[0];
  const response2 = data[1];
  const response3 = data[2];

  newState.BTC.COINGECKO.unshift({
    price: response1[0].current_price as string,
    date,
  });
  newState.ETH.COINGECKO.unshift({
    price: response1[1].current_price,
    date,
  });
  newState.XRP.COINGECKO.unshift({
    price: response1[2].current_price,
    date,
  });

  newState.BTC.STORMGAIN.unshift({
    price: response2.BTC_USDT.last_price as string,
    date,
  });
  newState.ETH.STORMGAIN.unshift({
    price: response3.ETH.USD as string,
    date,
  });
  newState.XRP.STORMGAIN.unshift({
    price: response2.XRP_USDT.last_price as string,
    date,
  });

  newState.BTC.CRYPTOCOMPARE.unshift({
    price: response3.BTC.USD as string,
    date,
  });
  newState.ETH.CRYPTOCOMPARE.unshift({
    price: response3.ETH.USD as string,
    date,
  });
  newState.XRP.CRYPTOCOMPARE.unshift({
    price: response3.XRP.USD as string,
    date,
  });

  return newState;
};

export const formatDataForConverter = (data: any[]) => {
  const response1 = data[0];
  const response2 = data[1];
  const BTC: APIsForConversion = {
    COINGECKO: +response1[0].current_price,
    CRYPTOCOMPARE: +response2.BTC.MXN,
  };
  const ETH: APIsForConversion = {
    COINGECKO: +response1[1].current_price,
    CRYPTOCOMPARE: +response2.ETH.MXN,
  };
  const XRP: APIsForConversion = {
    COINGECKO: +response1[2].current_price,
    CRYPTOCOMPARE: +response2.XRP.MXN,
  };
  return { BTC, ETH, XRP };
};
