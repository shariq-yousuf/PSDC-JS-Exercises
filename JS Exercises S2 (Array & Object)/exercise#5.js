// 5. Find two largest number in an array numbers , print the result
// largest numbers array in sorted order.
// For Example
// Array of Numbers: let numbers = [34, 3, 9, 23, 16];
// output: [23, 34]
// Array of Numbers: let numbers = [5, 10, 11, 3, 16];
// output: [11, 16]
// Array of Numbers: let numbers = [5, 30, 11, 3, 16, 30, 21, 9];
// output: [30, 30]

let numbersArr = [
  [3, 9, 23, 16, 34],
  [5, 10, 11, 3, 16],
  [5, 30, 11, 3, 16, 30, 21, 9],
];
let largestNums = [];
let index = 0;
let coll = [];
let howManyTimes = 2

for (let i = 0; i < numbersArr.length; i++) {
  let numbers = numbersArr[i];

  for (let i = 0; i < howManyTimes; i++) {
    let lg = 0;

    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > lg) {
        lg = numbers[i];
        index = i;
      }
    }
    coll.unshift(lg);
    numbers.splice(index, 1);
  }

  largestNums.push(coll);
  coll = [];

  console.log(`Largest Numbers in array ${i + 1}:`, largestNums[i]);
}
