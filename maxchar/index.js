// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// solution 1: (My Solution)

// function maxChar(str) {
//   let charMap = {};
//   let max = 0;
//   let result = '';
//
//   for (let char of str){
//     if (!charMap[char]){
//       charMap[char] = 1;
//     } else {
//       charMap[char]++;
//     }
//   }
//   for (let key in charMap){
//     if (charMap[key] > max){
//       max = charMap[key];
//       result = key;
//     }
//   }
//   return result
// }

maxChar("abcccccccd");

module.exports = maxChar;
