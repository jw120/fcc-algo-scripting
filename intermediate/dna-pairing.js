//jshint esversion:6

function conjugate(base) {
  switch (base) {
    case "A": return "T";
    case "T": return "A";
    case "C": return "G";
    case "G": return "C";
    default: return "?";
  }
}

function pair(str) {
  return str.split("").map((base) => [base, conjugate(base)]);
}

console.log(pair("ATCGA"));
