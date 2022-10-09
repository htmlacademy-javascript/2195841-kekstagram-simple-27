const getRandomNumber = function(from, to) {
  return Math.floor(Math.random() * (to - from + 1)) + from;
};

const isValidLength = function(value, maxLength) {
  if (!value) {
    return false;
  }
  return value.length <= maxLength;
};

getRandomNumber(2, 5);
isValidLength('5', 5);
