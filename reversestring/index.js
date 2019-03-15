// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// solution 1: (My Solution)

// function reverse(str) {
//   return str.split("").reverse().join("");
// }

// solution 2: (My Solution)

function reverse(str) {

  let result = ''

  for (let i = str.length - 1; i >= 0; i--){
    result += str[i];
  }

  return result;
}

reverse('leppa');

module.exports = reverse;
