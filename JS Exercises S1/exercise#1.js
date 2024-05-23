const str = "radar"
let reversedStr = ""

for (i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i]
}

if (str === reversedStr) {
    console.log(`${true}; the word "${str} => ${reversedStr}" is palindrom.`)
} else {
    console.log(`${false}; the word "${str} => ${reversedStr}" is not palindrom.`)
} 
