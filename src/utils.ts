export type cryptoCurrency = {
  price: string;
  date: string;
};
export type APIs = {
  COINGECKO: [cryptoCurrency];
  STORMGAIN: [cryptoCurrency];
  CRYPTOCOMPARE: [cryptoCurrency];
};

export type cryptoCurrencies = {
  BTC: APIs;
  ETH: APIs;
  XRP: APIs;
};

export const formatData = (data: any[]) => {
  const response1 = data[0];
  const response2 = data[1];
  const response3 = data[2];
  const date = new Date(Date.now()).toTimeString();
  // const COINGECKO = {
  //   BTC: [{ price: response1[0].current_price, date }],
  //   ETH: [{ price: response1[1].current_price, date }],
  //   XRP: [{ price: response1[2].current_price, date }],
  // };
  //
  // const STORMGAIN = {
  //   BTC: [{ price: response2.BTC_USDT.last_price, date }],
  //   ETH: [{ price: response2.ETH_USDT.last_price, date }],
  //   XRP: [{ price: response2.XRP_USDT.last_price, date }],
  // };
  //
  // const CRYPTOCOMPARE = {
  //   BTC: [{ price: response3.BTC.USD, date }],
  //   ETH: [{ price: response3.ETH.USD, date }],
  //   XRP: [{ price: response3.XRP.USD, date }],
  // };

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

  newState.BTC.COINGECKO.push({
    price: response1[0].current_price as string,
    date,
  });
  newState.ETH.COINGECKO.push({
    price: response1[1].current_price,
    date,
  });
  newState.XRP.COINGECKO.push({
    price: response1[2].current_price,
    date,
  });

  newState.BTC.STORMGAIN.push({
    price: response2.BTC_USDT.last_price as string,
    date,
  });
  newState.ETH.STORMGAIN.push({
    price: response3.ETH.USD as string,
    date,
  });
  newState.XRP.STORMGAIN.push({
    price: response2.XRP_USDT.last_price as string,
    date,
  });

  newState.BTC.CRYPTOCOMPARE.push({
    price: response3.BTC.USD as string,
    date,
  });
  newState.ETH.CRYPTOCOMPARE.push({
    price: response3.ETH.USD as string,
    date,
  });
  newState.XRP.CRYPTOCOMPARE.push({
    price: response3.XRP.USD as string,
    date,
  });

  return newState;
};
