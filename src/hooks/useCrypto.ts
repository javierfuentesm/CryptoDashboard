import { useEffect, useState } from "react";
import { COINGECKO, CRYPTOCOMPARE, STORMGAIN } from "../constants";
import { cryptoCurrencies, formatData, refreshData } from "../utils";

type state = {
  data: cryptoCurrencies | undefined;
  error: null;
  loading: boolean;
};

export const useCrypto = () => {
  const [crypto, setCrypto] = useState<state | null>({
    data: undefined,
    error: null,
    loading: true,
  });

  useEffect(() => {
    Promise.all([COINGECKO, STORMGAIN, CRYPTOCOMPARE].map((u) => fetch(u)))
      .then((responses) => Promise.all(responses.map((res) => res.json())))
      .then((data) =>
        setCrypto({ ...crypto, data: formatData(data), loading: false })
      );
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (crypto) {
        setCrypto({ ...crypto, loading: true });

        Promise.all([COINGECKO, STORMGAIN, CRYPTOCOMPARE].map((u) => fetch(u)))
          .then((responses) => Promise.all(responses.map((res) => res.json())))
          .then((data) => {
            const newState = refreshData(crypto.data, data);
            setCrypto({ ...crypto, data: newState, loading: false });
          })
          .catch((error) => {
            setCrypto({ ...crypto, loading: false, error });
          });
      }
    }, 15000);
    return () => clearInterval(interval);
  }, [crypto, setCrypto]);
  return crypto;
};
