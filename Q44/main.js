//Q44:
//Sandwiches:
//Write a function that accepts a array of items a person wants on a sandwich.
//The function shiould have one parameter that collects as many items as the function call provides,
//and it should print a summary of samndwiches that is being ordered.
//Call the function three times using a diiferent number of arguments at each time.
//ANSWER:
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following items: \n");
    items.forEach(function (singleItem) {
        return console.log(singleItem);
    });
    console.log("Now Enjoy Sandwitch");
}
makeSandwich("Bead", "Butter");
makeSandwich("Chicken", "Cheese", "Egg");
makeSandwich("Bread", "Butter", "Tomato", "Egg", "Cheese", "Mayo");
