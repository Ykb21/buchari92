let age =21

if (age >=17) {
    console.log('you can now create an ID Card')
} else {
    console.log("you are not old enough to create an ID Card")
}
let grade ="B"

if(grade === "A") {
    console.log("Excellent Result!")
} else if (grade ==="B") {
    console.log("great")
}







let now = new Date()
let day = now.getDay()

switch (day){
    case 0:
        console.log("Minggu")
        break
        case 1:
            console.log(Senin)
            break
        case 2:
            console.log("Selasa")
            break
        case 3:
            console.log("Rabu")
            break
        case 4:
            console.log("Kamis")
            break
        case 5:
            console.log("jumat")
            break
        default:
            console.log("Sabtu")
}

let a = {}

if (a) {
    console.log(true)
} else {
    console.log(false)
}

let str = "purwahdika"

console.log(str.length)

let kata ="Javascript"

console.log(kata === 'Javascript' ? "Javascript" : "not Javascript");
