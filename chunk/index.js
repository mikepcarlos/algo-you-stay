
// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//solution 1: (My Solution)

// function chunk(arr, size){
//   let result = [];
//
//   for (let i = 0; i < arr.length; i++){
//     const lastEl = result[result.length - 1];
//
//     if (!lastEl || lastEl.length === size){
//       result.push([arr[i]]);
//     } else {
//       lastEl.push(arr[i]);
//     }
//   }
//   return result
// }

//solution 2: (Alt Solution)

// function chunk(arr, size) {
//   let array = [];
//   while(arr.length > 0){
//     array.push(arr.splice(0,size));
//   }
//   return array
// }

chunk([1, 2, 3], 1)

module.exports = chunk;
