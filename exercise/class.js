// template object

class Student {
    name = ""
    #age =""
    city= ""

    constructor(nama , umur, kota) {
        this.name = nama
        this.age = umur
        this.city = kota
    }

    greeting() {
        return `hello ${this.name}`
    }

    getAge() {
        return this.#age
    }
}

const student1 = new Student("yakub", 31, "pekanbaru")
const student2 =new Student("budi", 21, "dumai")

console.log(student1.getAge())
console.log(student2.greeting())