export const numberToCurrencyString = int => {
  return int.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3}),)/g, "$1.");
}

