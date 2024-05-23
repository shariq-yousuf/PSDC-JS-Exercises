// 2. Find the longest word in string
// let sentence1 = "The quick brown fox jumps over the lazy dog";
// Your program should print "jumps" as it is the longest word in the string.
// let sentence2 = "A journey of a thousand miles begins with a single step";
// Your program should print "thousand" as it is the longest word in the string.
// let sentence3 = "Supercalifragilisticexpialidocious is a very long word";
// Your program should prnt "Supercalifragilisticexpialidocious" as it is the longest
// word in the string.

const sentences = [
  "The quick brown fox jumps over the lazy dog",
  "A journey of a thousand miles begins with a single step",
  "Supercalifragilisticexpialidocious is a very long word",
];
let longestWord = "";

for (let i = 0; i < sentences.length; i++) {
  let strToArr = sentences[i].split(" ");

  for (let i = 0; i < strToArr.length; i++) {
    if (strToArr[i].length >= longestWord.length) {
      longestWord = strToArr[i];
    }
  }
  console.log(`longestWord of sentence #${i + 1}:`, longestWord);
}
