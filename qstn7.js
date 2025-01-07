//  7. create n object and add new key to it using three methods

const obj={
    name:"raju",
    age:26,
    place:"trivandrum"
}

obj["country"]="india"
obj.experience="0"
Object.assign(obj,{mothertounge:"Malayalam"})

console.log(obj);