//Q42:
//GREAT MAGICIANS:
//Star witha copy of your program from exercise 41.Write a function calledmake_great that modifies the array of magicians
//by adding the phrase great to each magicians name.Call show_magicians() to see that the list has actually been modified.

//Answer:
//Answer:
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name)
)
}


function make_great(magicians: String[]){
    return magicians.map(name => `The Great ${name}`)
}

let magicians_names = ["David Copper Field", "Criss Angel", "David Blaine", "Penn & Teller"];

let great_magicians = make_great(magicians_names)
console.log(great_magicians);
