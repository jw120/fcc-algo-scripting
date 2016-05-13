function makeFriendlyDates(inputs) {

  var as = inputs[0].split("-");
  var bs = inputs[1].split("-");

  return makeFriendly(
    parseInt(as[0], 10), parseInt(as[1], 10), parseInt(as[2], 10),
    parseInt(bs[0], 10), parseInt(bs[1], 10), parseInt(bs[2], 10),
    (new Date()).getFullYear());

}

function makeFriendly(ay, am, ad, by, bm, bd, cy) {

  // Show single result if both dates the same
  if (ay === by && am === bm && ad === bd) {
    return [friendly(ad, am, ay === cy ? undefined : ay)];
  }

  // If range within a year, trim duplicated month and year
  if (by === ay || (by === ay + 1 && (bm < am || (bm === am && bd < ad)))) {
    bm = (bm === am && by === ay) ? undefined : bm;
    by = undefined;
    ay = (ay === cy) ? undefined : ay;  // Trim opening year if same as current year
  }

  return [friendly(ad, am, ay), friendly(bd, bm, by)];

}

// Return a date in friendly string form - all args are optional (return empty string if all missing)
function friendly(d, m, y) {

  var s = "";

  console.log("friendly", d, m, y);

  switch (m) {
  case 1: s += "January "; break;
  case 2: s += "February "; break;
  case 3: s += "March "; break;
  case 4: s += "April "; break;
  case 5: s += "May "; break;
  case 6: s += "June "; break;
  case 7: s += "July "; break;
  case 8: s += "August "; break;
  case 9: s += "September "; break;
  case 10: s += "October "; break;
  case 11: s += "November "; break;
  case 12: s += "December "; break;
  }

  switch (d) {
  case 1: s += "1st"; break;
  case 2: s += "2nd"; break;
  case 3: s += "3rd"; break;
  default: s += d + "th";
  }

  if (y !== undefined) {

    s += ", " + y;

  }

  return s;

}


// Tests

//console.log(friendly(3, 2, 2017));


var tests = [
  shallowArrayEqual(makeFriendlyDates(["2016-07-01", "2016-07-04"]), ["July 1st","4th"]),
  shallowArrayEqual(makeFriendlyDates(["2016-12-01", "2017-02-03"]), ["December 1st","February 3rd"]),
  shallowArrayEqual(makeFriendlyDates(["2016-12-01", "2018-02-03"]), ["December 1st, 2016","February 3rd, 2018"]),
  shallowArrayEqual(makeFriendlyDates(["2017-03-01", "2017-05-05"]), ["March 1st, 2017","May 5th"]),
  shallowArrayEqual(makeFriendlyDates(["2018-01-13", "2018-01-13"]), ["January 13th, 2018"]),
  shallowArrayEqual(makeFriendlyDates(["2022-09-05", "2023-09-04"]), ["September 5th, 2022","September 4th"]),
  shallowArrayEqual(makeFriendlyDates(["2022-09-05", "2023-09-05"]), ["September 5th, 2022","September 5th, 2023"])
];

console.log(tests);


function shallowArrayEqual(xs,ys) {

  console.log(xs, ys);

  return xs.length === ys.length && xs.every(function (x, i) {

    return x === ys[i];

  });

}
