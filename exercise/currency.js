

let number = 1234567 // Rp 1.234.567
let numString = number.toString()
let result = ""
let counter = 0

for (let i = numString.length - 1; i >= 0; i--) {
    if (counter % 3 == 0 && counter > 0) {
        result = "." + result
    }

    result = numString.charAt (i) + result
    counter++
}

console.log(`Rp. ${result},00`)
