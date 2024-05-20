let i = 1
let factorial = 5
let n = factorial

if (factorial >= 0) {
    while (i < n) {
        factorial *= i
        i++
    }
    console.log(`The factorial of ${n} is ${factorial}.`)
} else {
    console.log(`Factorial is not defined for negative numbers.`)
}
