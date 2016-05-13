function romanDigit(d, one, five, ten) {
  switch (d) {
    case 0: return "";
    case 1: return one;
    case 2: return one + one;
    case 3: return one + one + one;
    case 4: return one + five;
    case 5: return five;
    case 6: return five + one;
    case 7: return five + one + one;
    case 8: return five + one + one + one;
    case 9: return one + ten;
    default: return "Bad argument to romanDigit: " + d;
  }
}

function convert(d) {
  var ones = d % 10;
  d -= ones;
  var tens = (d / 10) % 10;
  d -= 10 * tens;
  var hundreds = (d / 100) % 10;
  d -= 100 * hundreds;
  var thousands = d / 1000;

  return (
    romanDigit(thousands, "M", "?", "?") +
    romanDigit(hundreds, "C", "D", "M") +
    romanDigit(tens, "X", "L", "C") +
    romanDigit(ones, "I", "V", "X")
  );

}
