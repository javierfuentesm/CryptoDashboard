import * as React from "react";
import { useConverter } from "../../hooks/useConverter";
import { FC, useState } from "react";
import { Spinner } from "../Spinner";
import {
  APIProvider,
  ConverterWrapper,
  InputConverter,
  InputWrapper,
  Label,
  LabelForInput,
} from "./styled";

type ConverterProps = {
  active: string;
};

const Converter: FC<ConverterProps> = ({ active }) => {
  const { data, error, loading } = useConverter();
  const [input, setInput] = useState<number | undefined>();
  const coinGeckoConversion = (input / data?.[active].COINGECKO).toFixed(4);
  const cryptoCompareConversion = (
    input / data?.[active].CRYPTOCOMPARE
  ).toFixed(4);

  if (error) {
    return (
      <>
        <p>Something went wrong:</p>
        <p>{error.message}</p>
      </>
    );
  }
  return (
    <ConverterWrapper>
      <InputWrapper>
        <LabelForInput htmlFor="converter">Convert to MXN</LabelForInput>
        <InputConverter
          type="text"
          id="converter"
          name="converter"
          aria-label="Converter to mxn"
          onChange={(e) => setInput(+e.target.value)}
        />
      </InputWrapper>

      {data !== undefined && (
        <>
          <APIProvider>
            <Label>Coingecko {loading && <Spinner />}</Label>
            {coinGeckoConversion !== "NaN" ? coinGeckoConversion : 0.0}
          </APIProvider>
          <APIProvider>
            <Label>CryptoCompare {loading && <Spinner />}</Label>
            {cryptoCompareConversion !== "NaN" ? cryptoCompareConversion : 0.0}
          </APIProvider>
        </>
      )}
    </ConverterWrapper>
  );
};

export const MemoizedConverter = React.memo(Converter);
