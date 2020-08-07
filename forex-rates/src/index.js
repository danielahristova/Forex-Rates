import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import CurrencyItem from "./CurrencyItem";

import "./index.css";

function CurrencyList() {
  const [baseCurrency, setbaseCurrency] = useState("");
  const [currencies, setCurrencies] = useState({});
  useEffect(() => {
    fetch("http://localhost:3000/currencies.json")
      .then((res) => res.json())
      .then((json) => {
        setCurrencies(json.rates);
        setbaseCurrency(json.base);
      });
  }, [setCurrencies]);

  return (
    <table className="currency-list">
      <tbody>
        {Object.keys(currencies).map((keyName, i) => (
          <CurrencyItem
            i={i}
            baseCurrency={baseCurrency}
            keyName={keyName}
            currencies={currencies}
            key={i}
          />
        ))}
      </tbody>
    </table>
  );
}

ReactDOM.render(<CurrencyList />, document.querySelector("#root"));
