import { useSafeDispatch } from "./useSafeDispatch";
import * as React from "react";

type state = {
  status: string;
  data: null | any;
  error: null | any;
};

const defaultInitialState: state = { status: "idle", data: null, error: null };

export const useAsync = (initialState: any) => {
  const initialStateRef = React.useRef({
    ...defaultInitialState,
    ...initialState,
  });
  const [{ status, data, error }, setState] = React.useReducer(
    (s: any, a: any) => ({ ...s, ...a }),
    initialStateRef.current
  );

  const safeSetState = useSafeDispatch(setState);

  const run = React.useCallback(
    (promise) => {
      if (!promise || !promise.then) {
        throw new Error(
          `The argument passed to useAsync().run must be a promise. Maybe a function that's passed isn't returning anything?`
        );
      }
      safeSetState({ status: "pending" });
      return promise.then(
        (data: any) => {
          safeSetState({ data, status: "resolved" });
          return data;
        },
        (error: any) => {
          safeSetState({ status: "rejected", error });
          return error;
        }
      );
    },
    [safeSetState]
  );

  const setData = React.useCallback(
    (data) => safeSetState({ data }),
    [safeSetState]
  );
  const setError = React.useCallback(
    (error) => safeSetState({ error }),
    [safeSetState]
  );
  const reset = React.useCallback(
    () => safeSetState(initialStateRef.current),
    [safeSetState]
  );

  return {
    isIdle: status === "idle",
    isLoading: status === "pending",
    isError: status === "rejected",
    isSuccess: status === "resolved",

    setData,
    setError,
    error,
    status,
    data,
    run,
    reset,
  };
};
