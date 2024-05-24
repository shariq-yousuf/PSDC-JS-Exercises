// 5. Find two largest number in an array numbers , print the result
// largest numbers array in sorted order.
// For Example
// Array of Numbers: let numbers = [34, 3, 9, 23, 16];
// output: [23, 34]
// Array of Numbers: let numbers = [5, 10, 11, 3, 16];
// output: [11, 16]
// Array of Numbers: let numbers = [5, 30, 11, 3, 16, 30, 21, 9];
// output: [30, 30]

let numbers = [34, 3, 9, 23, 16];
let largestNumber = 0;
let twoLargestNums = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > largestNumber) {
    largestNumber = numbers[i];
  }
}
twoLargestNums.push(largestNumber);

largestNumber = 0
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > largestNumber && numbers[i] !== largestNumber) {
    largestNumber = numbers[i];
  }
}


console.log("twoLargestNumber:", twoLargestNums);
console.log("largestNumber:", largestNumber);

// if (numbers[i]) <
