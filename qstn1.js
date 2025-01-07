//1. check if a key exist before deleting it

const cloth={
        name:"rayon",
        color:"yellow",
        price:1500,
        meter:5
     }

console.log("color" in cloth);
delete cloth["color"];
console.log(cloth);