export const currencyStringToNumber = val => {
  return isNaN(val) === false 
  ? parseFloat(val) 
  : parseFloat(val.replace(".", "").replace(",", "."));
}
