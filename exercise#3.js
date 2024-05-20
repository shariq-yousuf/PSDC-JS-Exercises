const n = 37
let isItPrimeNumber = ""


for (let i = 2; i < 10; i++) {
    if (i === n) {
        continue
    } else {
        if (n % n === 0 && n % i !== 0) {
            isItPrimeNumber = true
        } else {
            isItPrimeNumber = false
            break
        }
    }
}

if (isItPrimeNumber) {
    console.log(`${n} is a prime number.`)
} else {
    console.log(`${n} is not a prime number.`)
}