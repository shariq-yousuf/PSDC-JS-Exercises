let str = "Hello World!"
let reversed = ""

// Reversing string with for loop.
for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i]
}
console.log(reversed.toLowerCase())


// Reversing string with while loop.
str = "Shopping"
reversed = ""
let i = str.length - 1

while (i >= 0) {
    reversed+= str[i]
    i--
}
console.log(reversed.toLowerCase())
