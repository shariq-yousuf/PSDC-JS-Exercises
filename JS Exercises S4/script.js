// 1. Frequency Counter
// Problem: Count the frequency of each word in a sentence.
// Sentence: "The quick brown fox jumps over the lazy dog the fox was
// quick"

const sentence = "The quick brown fox jumps over the lazy dog the fox was quick"
const wordsArray = sentence.toLowerCase().split(" ")

const countWordsFrequency = (arr) => {
    const frequency = {}

    for (const item of arr) {
        if (!frequency[item]) {
            frequency[item] = 1
        } else {
            frequency[item] += 1
        }
    }

    return frequency
}
console.log(countWordsFrequency(wordsArray))

