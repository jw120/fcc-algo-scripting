//jshint esversion:6

function fearNotLetter(str) {
  "use strict";

  for (let i = 0; i < str.length - 1; i++) {
    let c = str.charCodeAt(i);
    let n = str.charCodeAt(i + 1);
    if (n !== c + 1) {
      return String.fromCharCode(c + 1);
    }
  }
  return undefined;
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("yz"));
