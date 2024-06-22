// 1. Frequency Counter
// Problem: Count the frequency of each word in a sentence.
// Sentence: "The quick brown fox jumps over the lazy dog the fox was
// quick"

const sentence =
  "The quick brown fox jumps over the lazy dog the fox was quick";
const wordsArray = sentence.toLowerCase().split(" ");

const countWordsFrequency = (arr) => {
  const frequency = {};

  for (const item of arr) {
    if (!frequency[item]) {
      frequency[item] = 1;
    } else {
      frequency[item] += 1;
    }
  }

  return frequency;
};
console.log(countWordsFrequency(wordsArray));

// 2. sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if
// the two numbers have the same frequency of digits.
// Your solution MUST have the following complexities:
// Time: O(N)
// Sample Input:
// 1. sameFrequency(182,281) // true
// 2. sameFrequency(34,14) // false
// 3. sameFrequency(3589578, 5879385) // true
// 4. sameFrequency(22,222) // false

const sameFrequency = (n1, n2) => {
  const num1 = n1.toString();
  const num2 = n2.toString();

  const frequency = {};

  for (const item of num1) {
    if (!frequency[item]) {
      frequency[item] = 1;
    } else {
      frequency[item] += 1;
    }
  }

  for (const n of num2) {
    if (!frequency[n]) {
      return false;
    } else {
      frequency[n] -= 1;
    }
  }

  return true;
};
console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
