export function operate(firstNum = 0, secendNum, operation) {
  const first = firstNum;
  const secend =
    secendNum || (operation === "/" || operation === "*" ? "1" : "0");

  if (operation === "+") {
    return Number(first) + Number(secend);
  }

  if (operation === "-") {
    return Number(first) - Number(secend);
  }

  if (operation === "*") {
    return exponential(Number(first) * Number(secend));
  }

  if (operation === "/") {
    if (secend === "0") {
      console.log("error, Divided by zero...!");
      return "0";
    }
    return (Number(first) / Number(secend)).toPrecision(10);
  }
}

function exponential(number) {
  if (number.length > 20) {
    return number.toExponential(10);
  }

  return number;
}
