function summoner() {
  let monsters = [];

  let i = 1;
  while (i < 10) {
    let current = i;
    let monster = function () {
      // create a monster function,
      return 'Under attack of monster ' + current; // that should show its number
    };
    monsters.push(monster); // and add it to the array
    i++;
  }

  // ...and return the array of monster summoning functions
  return monsters;
}
function sum(a) {
  return function (b) {
    return a + b;
  };
}

let monsters = summoner();
monsters.forEach((monster, index) => {
  console.log(`${index + 1}: ${monster()}`);
});

console.log(sum(8)(4));
