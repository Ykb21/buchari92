function sumNumber (num1, num2) {
    let result =num1 + num2
    return result
}

let x = sumNumber(20, 30)

console.log(x)
console.log(sumNumber(10, 5))

// tulisan purwadhika terbalik
function reverseWord(word){
    let result = ""

    for (let i = word.length - 1; i >= 0; i--) {
        result += word.charAt(i)
    }

    return result
}

console.log(reverseWord("madam"))
console.log(reverseWord("purwadhika"))
console.log(reverseWord("indonesia"))
console.log(reverseWord("hello world"))


// teknik defauld parameter
function multiply(a, b = 1) { 
    return a * b
}
console.log(multiply(10, 3))

//rest parameters (untuk bisa munculkan sisa three,four,five)
function myFunc(a, b, ...more) {
    console.log(a)
    console.log(b)
    console.log(more)
}

myFunc("one", "two", "three", "Four", "five")

// // nested function
function getMessage (firstName) {
    function sayHello() {
        return `hallo ${firstName}. `     
    }
    
    function welcomeMessage() {
        return `welcome to purwadhika!`
    }
    return sayHello() + welcomeMessage()
}
console.log(getMessage("david"))


//  closure Function
function greeting(name) {
    const defauldMessage = "Hello "

    return function () {
        return defauldMessage + name
    }
}

const greetingDavid = greeting("David")
console.log(greetingDavid())

// currying
function multiplier(factor) {
    return function (number) {
        return factor * number
    }
}

const mul3 = multiplier(3)
const mul5 = multiplier(5)


console.log(mul3(5))
console.log(mul5(2))

// recursive sebuah fanction yg memangil diri dia sendiri

function countDown(fromNumber) {
    console.log(fromNumber)

    let nextNumber =fromNumber - 1
    if (nextNumber > 0) {
        countDown(nextNumber)
    }
}
countDown(7)

// // arrow function
const square = (number) => number * number

console.log(square(10))

let number ="123"

console.log(number)
console.log(parseInt(number))

// split.js

function splitWord(str) {
    return str.split(' ')
}

console.log(splitWord('hello World'))
