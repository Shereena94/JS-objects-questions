// 5. create an object and display the values of the object in 3ways

const cars={
    name:"mercedes",
    yearofManfctr:2013,
    color:"black"
}

console.log(cars["name"]);
console.log(cars.name);


for(let type in cars){
    if(type=="name"){
        console.log(cars[type]);
    }
}
