function fizzbuzz(n) {
    let res = []

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            res.push("fizzbuzz")
        } else if (i % 3 === 0) {
            res.push("fizz")
        } else if (i % 5 === 0) {
            res.push("buzz")
        } else {
            res.push(i)
        }
    }
    return res.join(", ")
}

console.log(fizzbuzz(15))