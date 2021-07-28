import { useEffect, useState } from "react";
import {COINGECKO_USD, CRYPTOCOMPARE_USD, refreshDataTime, STORMGAIN_USD} from "../constants";
import { cryptoCurrencies, formatData, refreshData } from "../utils";

type state = {
  data: cryptoCurrencies | undefined;
  error: any;
  loading: boolean;
};

export const useCrypto = () => {
  const [crypto, setCrypto] = useState<state | null>({
    data: undefined,
    error: null,
    loading: true,
  });

  useEffect(() => {
    Promise.all([COINGECKO_USD, STORMGAIN_USD, CRYPTOCOMPARE_USD].map((u) => fetch(u)))
      .then((responses) => Promise.all(responses.map((res) => res.json())))
      .then((data) =>
        setCrypto({ ...crypto, data: formatData(data), loading: false })
      );
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (crypto) {
        setCrypto({ ...crypto, loading: true });

        Promise.all([COINGECKO_USD, STORMGAIN_USD, CRYPTOCOMPARE_USD].map((u) => fetch(u)))
          .then((responses) => Promise.all(responses.map((res) => res.json())))
          .then((data) => {
            const newState = refreshData(crypto.data, data);
            setCrypto({ ...crypto, data: newState, loading: false });
          })
          .catch((error) => {
            setCrypto({ ...crypto, loading: false, error });
          });
      }
    }, refreshDataTime);
    return () => clearInterval(interval);
  }, [crypto, setCrypto]);
  return crypto;
};
