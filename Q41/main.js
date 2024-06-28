//Q41:
//MAGICIANS:
//Make an array of magicians names. Pass the array to a function called show_magicians(),
//which prints the name of each magician in the array.
//Answer:

 function show_magicians(magicians: String[]){
    magicians.forEach(name => console.log(name)
);
}

function make_great(magicians:String[]){
    return magicians.map(name => `The Great ${name}`)
}

let magicians_names = ["David Copper Field", "Criss Angel", "David Blaine", "Penn & Teller"];

let great_magicians = make_great(magicians_names)
console.log(great_magicians);