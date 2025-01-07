//  11. wap to check if an object have address property adress.if it exists delete it.otherwise print a message that property does not exist



const person={
    name:"shery",
    age:30,
    place:"trivandrum",
    address:"kudavoochira"
}


const result=person["address"]?delete person["address"]:"Address property not exist"

console.log(result,person);