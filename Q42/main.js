//Q42:
//GREAT MAGICIANS:
//Star witha copy of your program from exercise 41.Write a function calledmake_great that modifies the array of magicians
//by adding the phrase great to each magicians name.Call show_magicians() to see that the list has actually been modified.
//Answer:
//Answer:
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magicians_names = ["David Copper Field", "Criss Angel", "David Blaine", "Penn & Teller"];
var great_magicians = make_great(magicians_names);
console.log(great_magicians);
