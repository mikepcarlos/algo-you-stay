// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// solution 1: (My Solution)

// function reverseInt(n) {
//
//   if (n.toString()[0] === '-'){
//     let killed = n.toString().substring(1);
//     return parseInt(killed.split("").reverse().join("")) * -1;
//   } else {
//     return parseInt(n.toString().split("").reverse().join(""));
//   }
// }

// solution 2: (Alt Solution)

// function reverseInt(n) {
//
//   const rev = n.toString().split("").reverse().join("");
//
//   return parseInt(rev) * Math.sign(n);
// }

reverseInt(-15);

module.exports = reverseInt;
