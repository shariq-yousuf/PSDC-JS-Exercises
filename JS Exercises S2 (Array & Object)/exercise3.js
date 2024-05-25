// 3. Title Case a sentence
// Write a JavaScript program that will capitalize the sentence.
// let sentence1 = "I'm a little teapot short and stout";
// // Your program should print "I'm A Little Teapot Short And Stout"
// let sentence2 = "sHoRt AnD sToUt";
// // Your program should print "Short And Stout"
// let sentence3 = "HERE IS MY HANDLE HERE IS MY SPOUT";
// // Your program should print "Here Is My Handle Here Is My Spout"

const sentences = [
  "I'm a little teapot short and stout",
  "sHoRt AnD sToUt",
  "HERE IS MY HANDLE HERE IS MY SPOUT",
];
let capitalized = "";

for (let i = 0; i < sentences.length; i++) {
  const sentence = sentences[i].toLowerCase();
  const strToArr = sentence.split(" ");

  for (let i = 0; i < strToArr.length; i++) {
    const slicedArr = strToArr[i].split("");
    const cap = slicedArr[0].toUpperCase();
    slicedArr.splice(0, 1, cap);
    const reString = slicedArr.join("");
    capitalized += reString + " ";
  }
  console.log(capitalized);
  capitalized = "";
}
