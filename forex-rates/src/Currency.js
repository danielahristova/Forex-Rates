import React from "react";

function Currency({ baseCurrency, currency }) {
  let secondCurrency;
  switch (currency) {
    case "USD":
      secondCurrency = "U.S. DOLLAR";
      break;
    case "AUD":
      secondCurrency = "AUSTRALIAN DOLLAR";
      break;
    case "CAD":
      secondCurrency = "CANADIAN DOLLAR";
      break;
    default:
      secondCurrency = "BULGARIAN LEV";
      break;
  }
  return (
    <div>
      <div>
        {baseCurrency}/{currency}
      </div>
      <div>EURO / {secondCurrency}</div>
    </div>
  );
}

export default Currency;
