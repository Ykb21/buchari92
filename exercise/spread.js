let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [ ...arr1, ...arr2]; //spread operator

console.log(arr3)

let obj1 ={name: "yakub"};
let obj2 ={email: "yakub@gmail.com"};
let obj3 ={ ...obj1, ...obj2}

console.log(obj3)

// setter & getter (set, get)

const user = {
    firstName: "yakub",
    lastName: "smith",

    get fulName() {
        const splittedValue = value.split(' ')
        this.firstName = splittedValue{0}
        this.lastName =splittedValue
    }
}