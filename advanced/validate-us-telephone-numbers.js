var country = "(1 ?)?"; // country code must be one, followed by an optional space, whole is optional
var digit3 = "\\d{3}"; // three digits
var bracketed3 = "\\(\\d{3}\\)"; // three digits in parens
var area = "(" + digit3 + "|" + bracketed3 + "|)"; // area code is three digits either with or without parens
var digit4 = "\\d{4}"; // four digits
var sep = "[- ]?"; // seperator is an optional dash or space
var r = new RegExp("^" + country + area + sep + digit3 + sep + digit4 + "$");

function telephoneCheck(str) {

  return r.test(str);
}

// Tests below

var tests = [
  [ "555-555-5555", true ],
  [ "1 555-555-5555", true ],
  [ "1 (555) 555-5555", true ],
  [ "5555555555", true ],
  [ "555-555-5555", true ],
  [ "(555)555-5555", true ],
  [ "1(555)555-5555", true ],
  [ "1 555)555-5555", false ],
  [ "1 555 555 5555", true ],
  [ "1 456 789 4444", true ],
  [ "123**&!!asdf#", false ],
  [ "55555555", false ],
  [ "(6505552368)", false],
  ["2 (757) 622-7382", false],
  [ "0 (757) 622-7382", false],
  [ "-1 (757) 622-7382", false],
  [ "2 757 622-7382", false ],
  [ "10 (757) 622-7382", false ],
  [ "27576227382", false ],
  [ "(275)76227382", false ],
  [ "2(757)6227382", false ],
  [ "2(757)622-7382", false ],
  [ "555)-555-5555", false ],
  [ "(555-555-5555", false ]
];

tests.map(function (test) {
  var number = test[0];
  var expected = test[1];
  var result = telephoneCheck(number);
  if (result === expected) {
    console.log("OK", number);
  } else {
    console.log(number, "Failed. Expected ", expected, "got", result);
  }
});
