import React from "react";

function Image({ base, currency }) {
  const baseFlag = base.substring(0, base.length - 1).toLowerCase();
  const second = currency.substring(0, currency.length - 1).toLowerCase();
  return (
    <span>
      <img
        alt={baseFlag}
        src={`https://www.countryflags.io/${baseFlag}/flat/32.png`}
      ></img>
      <img
        alt={second}
        src={`https://www.countryflags.io/${second}/flat/48.png`}
      ></img>
    </span>
  );
}

export default Image;
