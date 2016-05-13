//jshint esversion:6

function translate (str) {
  "use strict";

  let match = /^([^aeiou]+)(.*)/i.exec(str);

  return match ? match[2] + match[1] + "ay" : str + "way";

}

console.log(translate("consonant"));
console.log(translate("eight"));
console.log(translate("glove"));
