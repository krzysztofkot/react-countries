import { useReducer, useCallback } from "react";
import { useParams } from "react-router-dom";

const httpReducer = (state, action) => {
  if (action.type === "SEND") {
    return {
      data: null,
      error: null,
      status: "loading",
    };
  }
  if (action.type === "ERROR") {
    return {
      data: null,
      error: action.errorMessage,
      status: "COMPLETED",
    };
  }
  if (action.type === "SUCCESS") {
    return {
      data: action.data,
      error: null,
      status: "COMPLETED",
    };
  }
};

const useHttp = () => {
  const [httpState, dispatch] = useReducer(httpReducer, {
    data: null,
    error: null,
    status: "loading",
  });
  const { all, region, country } = useParams();

  const getData = useCallback(async () => {
    dispatch({ type: "SEND" });
    try {
      let response;
      if (country) {
        response = await fetch(
          `https://restcountries.com/v3.1/name/${country}`
        );
      } else if (region) {
        response = await fetch(
          `https://restcountries.com/v3.1/region/${region}`
        );
      } else response = await fetch(`https://restcountries.com/v3.1/${all}`);
      if (!response.ok) throw new Error("Could not retrieve data");
      const data = await response.json();
      dispatch({ data, type: "SUCCESS" });
    } catch (error) {
      console.log(error.message);
      dispatch({ type: "ERROR", errorMessage: error.message });
    }
  }, [all, country, region]);

  return { getData, ...httpState };
};

export default useHttp;
