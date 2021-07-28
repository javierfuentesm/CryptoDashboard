import { useEffect, useState } from "react";
import {
  COINGECKO_MXN,
  CRYPTOCOMPARE_MXN,
  refreshDataTime,
} from "../constants";
import {
  cryptoCurrenciesForConversion,
  formatDataForConverter,
} from "../utils";

type state = {
  data: cryptoCurrenciesForConversion | undefined;
  error: any;
  loading: boolean;
};

export const useConverter = () => {
  const [crypto, setCrypto] = useState<state | null>({
    data: undefined,
    error: null,
    loading: true,
  });

  useEffect(() => {
    Promise.all([COINGECKO_MXN, CRYPTOCOMPARE_MXN].map((u) => fetch(u)))
      .then((responses) => Promise.all(responses.map((res) => res.json())))
      .then((data) =>
        setCrypto({
          ...crypto,
          data: formatDataForConverter(data),
          loading: false,
        })
      )
      .catch((error) => setCrypto({ ...crypto, loading: false, error }));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (crypto) {
        setCrypto({ ...crypto, loading: true });

        Promise.all([COINGECKO_MXN, CRYPTOCOMPARE_MXN].map((u) => fetch(u)))
          .then((responses) => Promise.all(responses.map((res) => res.json())))
          .then((data) =>
            setCrypto({
              ...crypto,
              data: formatDataForConverter(data),
              loading: false,
            })
          )
          .catch((error) => setCrypto({ ...crypto, loading: false, error }));
      }
    }, refreshDataTime);
    return () => clearInterval(interval);
  }, [crypto, setCrypto]);
  return crypto;
};
