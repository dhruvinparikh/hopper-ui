export const toFormat = (value, decimal = 2) => {
  if (value !== undefined) {
    value = value.toString();
    let n = Number(value);
    if (value.indexOf('.') > -1) {
      n = Number(value).toFixed(decimal);
    }
    return n.toLocaleString('en');
  }
};
