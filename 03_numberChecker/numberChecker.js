function numberChecker(number) {
  if (number === 6) {
    return false;
  }
  if (number >= 10) {
    return true;
  } else if (number < 10) {
    return false;
  }
}

// Do not edit below this line
module.exports = numberChecker;
