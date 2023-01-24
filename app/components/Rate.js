import React from "react";

function Rate({ rate }) {
  const r = rate;
  console.log(r == null);
  if (r[1] == null) {
    return <div>don't have any rate</div>;
  } else {
    return <div>Average rating : {r[1].toFixed(1)}</div>;
  }
}

export default Rate;
