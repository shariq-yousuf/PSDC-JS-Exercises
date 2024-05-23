// 1. Find the smallest number in array
// Array of Numbers: let numbers = [5, 3, 9, 1, 6];
// output: 1
// Array of Numbers: let numbers = [-5, -10, -16, -3, -11];
// output: -16


// first we have to find largest number then we will be able to find smallest. 
let numbers = [5, 3, 9, 1, 6];
let largestNumber = 0

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largestNumber) {
        largestNumber = numbers[i]
    }
}
console.log("largestNumber:", largestNumber)


// smallest number of positive numbers array
let smallestNumber = largestNumber

for (let i = 0; i <numbers.length; i++) {
    if (numbers[i] < smallestNumber) {
        smallestNumber = numbers[i]
    }
}
console.log("smallestNumber of positive array:", smallestNumber)


// smallest number of negative numbers array
numbers = [-5, -10, -16, -3, -11];

smallestNumber = largestNumber

for (let i = 0; i <numbers.length; i++) {
    if (numbers[i] < smallestNumber) {
        smallestNumber = numbers[i]
    }
}
console.log("smallestNumber of negative array:", smallestNumber)