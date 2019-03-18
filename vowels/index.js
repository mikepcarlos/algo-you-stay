// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

//soultion 1: (My Solution)

// function vowels(str) {
//   let count = 0;
//   let vowels = ['a', 'e', 'i', 'o', 'u'];
//
//   for (let i = 0; i < str.length; i++){
//     let char = str[i];
//
//     for (let vowel of vowels){
//       if (vowel === char || vowel.toUpperCase() === char.toUpperCase()) {
//         count++
//       }
//     }
//   }
//
//   return count;
// }

//solution 2: (brake it down)

// function vowels(str) {
//   let counter = 0;
//   let letters = ['a', 'e', 'i', 'o', 'u'];
//
//   for (let char of str.toLowerCase()){
//     if (letters.includes(char)){
//       counter++;
//     }
//   }
//   return counter;
// }

//solution 3: (RegEx solution)

// function vowels(str) {
//   const matches = str.match(/[aeiou]/gi);
//   return matches ? matches.length : 0;
// }

module.exports = vowels;
