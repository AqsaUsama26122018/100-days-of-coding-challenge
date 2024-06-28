//Q43:
//UNCHANGED MAGICIANS:
//Start with your  work from exercise 40. Call the function make _great() with a copy of the array of magicians names,
//Because the original array will be unchanged<return the new array and store it in a separate array.
//call show_magicians() with each array to show that you have one array of the original names and one array with the
// great added to each magicians name.

//ANSWER:

function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
let magicians_names = ["David Copper Field", "Criss Angel", "David Blaine", "Penn & Teller"];
let  copy_magicians_names = magicians_names.slice()

let copy_great_magicians = make_great(copy_magicians_names)

 console.log("Origininal Array\n");
 show_magicians(magicians_names)
 console.log("Copied Array\n");
 show_magicians(copy_great_magicians)
 
