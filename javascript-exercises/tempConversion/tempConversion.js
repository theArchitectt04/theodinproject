const ftoc = function() {
  let fahren = arguments[0];
  if(fahren === 32) return 0;
  let celsius = parseFloat(((fahren - 32) * (5/9)).toFixed(1));
  return celsius
}

const ctof = function() {
  let celsius = arguments[0];
  let fahren = parseFloat(((celsius*9/5) + 32).toFixed(1));
  return fahren;
}

module.exports = {
  ftoc,
  ctof
}
