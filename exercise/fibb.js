// write a code to print the first N fibonacci number
// 0 1 1 2 3 5 8 13 21 34 55 89 ....


let n = 15
let a = 0
let b = 1
let nextNumber = 0

for (let i = 1; i < n; i++) {
    nextNumber = a + b
    a = b
    b = nextNumber
    console.log(b)

}
