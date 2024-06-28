//45:
//CARS:
//Write a function thatstores information about a car in a object.The function should always recieve a manufacturer and 
//a model name.It should  then accept an arbitary number of keyword arguments.Call theb function with the required information and two other name-value pairs,
//such as a color or an optional feature.Print the Object that's returned to make sure all the information was stored correctly.

//ANSWER:
function create_car(manufacturer,model, ...options){
let car ={
    manufacturer: manufacturer,
    model: model
}

options.forEach(option => {
let [key,value] = option.split(":")
car [key.trim()] = value.trim
})
return car;
}
let my_car = create_car("Toyota", "Altis","Color:Black", "Sunroof:true")
console.log(my_car);

