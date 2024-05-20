const n = 6
const nStr = String(n)
let reversed = ""

if (n >= 0) {
    for (let i = nStr.length - 1; i >= 0; i--) {
        reversed += nStr[i]
        const reversedInteger = Number(reversed)
        console.log(reversedInteger, typeof reversedInteger)
    }
} else {
    for (let i = nStr.length - 1; i > 0; i--) {
        reversed += nStr[i]
    }
    const reversedInteger = Number(reversed)
    console.log("-" + reversedInteger, typeof reversedInteger)
}

