const convertToCelsius = function(arg) {
  let x = (arg - 32) * (5/9);
  return Math.round(x*10)/10
};

const convertToFahrenheit = function(arg) {
  let x = (arg* (9/5)) + 32;
  return Math.round(x * 10)/10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
