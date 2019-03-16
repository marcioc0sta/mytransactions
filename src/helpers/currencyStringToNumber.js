const currencyStringToNumber = val => {
  return isNaN(val) === false 
  ? parseFloat(val) 
  : parseFloat(val.replace(".", "").replace(",", "."));
}

export { currencyStringToNumber }
