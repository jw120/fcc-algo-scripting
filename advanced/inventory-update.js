

function updateInventory(inventory, newItems) {

  inventory = inventory || [];
  newItems = newItems || [];

  return newItems.reduce(addItem, inventory).sort(compareName);

}

function addItem(inventory, item) {

  var found = false;
  var i;

  for (i = 0; i < inventory.length && !found; i++) {

    if (inventory[i][1] === item[1]) {

      found = true;
      inventory[i][0] += item[0];

    }

  }

  if (!found) {

    inventory.push(item);

  }

  return inventory;

}

function compareName(x, y) {

  if (x[1] < y[1]) {

    return -1;

  } else if (x[1] === y[1]) {

    return 0;

  } else {

    return 1;

  }

}

// Tests


var tests = [
  Array.isArray(updateInventory()),
  updateInventory(
    [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]],
    [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]).length === 6,
  deepEquals(
    updateInventory(
      [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]],
      [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]),
    [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]),
  deepEquals(
    updateInventory(
      [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]],
      []),
    [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]]),
  deepEquals(
    updateInventory(
      [],
      [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]),
    [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]]),
  deepEquals(
    updateInventory(
      [[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]],
      [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]),
    [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]])
];

function deepEquals(x, y) {

  if (Array.isArray(x) && Array.isArray(y)) {

    return x.length == y.length && x.every(function (val, index) {

      return deepEquals(x[index], y[index]);

    });

  } else {

    return x === y;

  }

}

console.log(tests);
