let arr = ['A','B','c','D','E','F']
// A -> index 0
console.log(arr[4])

let score = [10, 20, 30, 40, 50]

let kotak = [(1, 2, 3), (4, 5, 6), (7, 8, 9)]

// console.log(arr.toString()) // ubah array ke string (pemisa comma)
// console.log(arr.join(""))

// console.log(arr)
let deletedValue = arr.pop() // menghapus huruf dari belakang
console.log(deletedValue)
console.log(arr)
arr.push("G") //menambah huruf dari belakang
console.log(arr)
arr.shift() // menghapus huruf dari depan
console.log(arr)
arr.unshift("Z") // menambahkan huruf dari depan
console.log(arr)

console.log(arr.length) //panjang huruf array

console.log(arr.indexOf("G"))

score.sort((a, b) => a -b) // ascending
console.log(score)
score.sort((a, b) => b - a) // descending (kebalikan)
console.log(score)

arr.reverse() // kebalikan huruf dari G
console.log(arr) 
