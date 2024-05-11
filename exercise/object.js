let person = {
    name: 'frangky',
    age: 26,
    address: {
        city: 'pekanbaru',
        country: 'indonesia'
    }
}

person.hobby ="coding" //add Object
person.name = "jhon" // update (cara menambah object)
delete person //cara menghapus object

// console.log(person.address)

// console.log(Object.keys(person))

for (let key in person) {
    console.log(key)
    console.log(person[key])
}

let selector = 'name'  // selector untuk mencari object
console.log(person[selector])