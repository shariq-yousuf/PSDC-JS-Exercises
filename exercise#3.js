const n = 8
let isItPrimeNumber = ""


for (let i = 2; i < n; i++) {
        if (n % i !== 0) {
            isItPrimeNumber = true
        } else {
            isItPrimeNumber = false
            break
        }
}

if (isItPrimeNumber) {
    console.log(`${n} is a prime number.`)
} else {
    console.log(`${n} is not a prime number.`)
}