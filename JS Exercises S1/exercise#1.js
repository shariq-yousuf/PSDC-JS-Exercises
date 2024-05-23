// first way 
const str = "level"
const strToArr = str.split("")
const reversedArr = strToArr.reverse()
const reversedStr = reversedArr.join("")

if (str === reversedStr) {
    console.log(`${true}; the word "${str} => ${reversedStr}" is palindrom.`)
} else {
    console.log(`${false}; the word "${str} => ${reversedStr}" is not palindrom.`)
}



// second way
const str2 = "hello"
const reversedStr2 = str2.split("").reverse().join("")

if (str2 === reversedStr2) {
    console.log(`${true}; the word "${str2} => ${reversedStr2}" is palindrom.`)
} else {
    console.log(`${false}; the word "${str2} => ${reversedStr2}" is not palindrom.`)
} 




// third way
const str3 = "radar"
let reversedStr3 = ""

for (i = str3.length - 1; i >= 0; i--) {
    reversedStr3 += str3[i]
}

if (str3 === reversedStr3) {
    console.log(`${true}; the word "${str3} => ${reversedStr3}" is palindrom.`)
} else {
    console.log(`${false}; the word "${str3} => ${reversedStr3}" is not palindrom.`)
} 
