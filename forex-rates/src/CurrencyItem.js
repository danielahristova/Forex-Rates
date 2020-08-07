import React from "react";

import Image from "./Image";
import Currency from "./Currency";
import Rate from "./Rate";

function CurrencyItem({ baseCurrency, keyName, currencies }) {
  return (
    <tr className="currency-item">
      <td className="currency-image">
        <Image base={baseCurrency} currency={keyName} />
      </td>

      <td className="currency-name">
        <Currency baseCurrency={baseCurrency} currency={keyName} />
      </td>
      <td className="currency-rate">
        <Rate rate={currencies[keyName]} />
      </td>
    </tr>
  );
}

export default CurrencyItem;
