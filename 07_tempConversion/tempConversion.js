const convertToCelsius = function(fahrenheitGiven) {
  let celciusConverted;
  celciusConverted = (fahrenheitGiven - 32) * (5 / 9);
  return Math.round(celciusConverted * 10) / 10;
};

const convertToFahrenheit = function(celciusGiven) {
  let fahrenheitConverted;
  fahrenheitConverted = (celciusGiven * 9/5) + 32;
  return Math.round(fahrenheitConverted * 10) / 10;
};

convertToCelsius();
convertToFahrenheit(-10);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
