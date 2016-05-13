//jshint esversion: 6

function matchCase(x, model) {
  "use strict";

  var acc = "";
  for (let i = 0; i < x.length; i++) {
    let xi = x.substr(i, 1);
    let mi = model.substr(i, 1);
    acc += mi.toLowerCase() === mi ? xi.toLowerCase() : xi.toUpperCase();
  }
  return acc;
}

function myReplace(str, before, after) {
  return str.replace(new RegExp(before, "ig"), match => matchCase(after, match));
}

console.log(matchCase("lazy", "aAc,"));
console.log(myReplace("A quick brown fox juMPed over the lazy dog", "jumped", "leaped"));
