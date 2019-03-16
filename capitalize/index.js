// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

//solution 1: (My Solution)

// function capitalize(str) {
//   let arr = str.split(" ");
//   let emptyArr = [];
//   for (let word of arr){
//     emptyArr.push(word.charAt(0).toUpperCase() + word.slice(1, word.length))
//   }
//   return emptyArr.join(" ");
// }

capitalize('look, it is working!');

module.exports = capitalize;
