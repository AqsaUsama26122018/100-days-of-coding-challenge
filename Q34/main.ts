//Q34:
//Pizzas:
//Think of atleast thre kind of your  favourite pizza.Store these pizza names in an array and
//then use a for loopto print the name of each pizza.
//Modifyyour loop to print a sentence using the name of the pizza instead of printing just the name of the piza.
//For each pizza you should have one line of output containing a simple statement like: "I like Peproni Pizza".
//Add a line at the end of your program outside the for loop that astates how much you like pizza.
//the output should consist of three or more linesabout the kinds of pizza,you like and then an additional sentence,
//such as I really love pizza!

//ANSWER:
let Pizzas: string[] =["Supreme","Peproni","Fajita"]
console.log("\nPizza names:\n\n");

for(let i=0;i<Pizzas.length; i++){
    console.log(Pizzas[i]);
    console.log("I like " + Pizzas[i] +" pizza" );
}

console.log("\nIreally like Pizza\n");

