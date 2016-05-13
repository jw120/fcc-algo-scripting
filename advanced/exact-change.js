function checkCashRegister(price, cash, cid) {

  var changeList = [];
  var changeToMake = 100 * (cash - price);

  var lastExact = false;

  while (changeToMake > 0 && cid.length > 0) {

    var newChange = cid.pop();
    var newCoin = newChange[0];
    var newDenom = denominations[newCoin];
    var newAmount = newChange[1] * 100;

    var coins = Math.floor (changeToMake / newDenom);
    var amountUsed = Math.min(newAmount, coins * newDenom);

    console.log(changeList, changeToMake, newDenom, newAmount, coins, amountUsed);

    lastExact = amountUsed === newAmount;

    changeToMake -= amountUsed;

    if (amountUsed > 0) {

      changeList.push([newCoin, amountUsed / 100]);

    }

  }

  if (changeToMake > 0) {

    return "Insufficient Funds";

  } else if (cid.length ===0 && lastExact) {

    return "Closed";

  } else {

    return changeList;

  }

}

var denominations = {
  PENNY: 1,
  NICKEL: 5,
  DIME: 10,
  QUARTER: 25,
  ONE: 100,
  FIVE: 500,
  TEN: 1000,
  TWENTY: 2000,
  "ONE HUNDRED": 10000
};



// Tests

var tests = [
  checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10],
                                   ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00],
                                   ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]),
  checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0],
                                   ["QUARTER", 0], ["ONE", 0], ["FIVE", 0],
                                   ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]),
  checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0],
                                   ["QUARTER", 0], ["ONE", 0], ["FIVE", 0],
                                   ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]),
  checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10],
                                   ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00],
                                   ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]),
  checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10],
                                   ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00],
                                   ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]),
  checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0],
                                   ["QUARTER", 0], ["ONE", 0], ["FIVE", 0],
                                   ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]),
  checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0],
                                   ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0],
                                   ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]),
  checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0],
                                   ["QUARTER", 0], ["ONE", 0], ["FIVE", 0],
                                   ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
];


var expected = [
  [["QUARTER", 0.5]],
  "Insufficient Funds",
  "Closed",
  [["QUARTER", 0.50]],
  [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]],
  "Insufficient Funds",
  "Insufficient Funds",
  "Closed"
];

tests.map(function (x, i) {

  console.log(x, expected[i]);

});
