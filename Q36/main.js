//Q36:
//T-SHIRTS:
//Write a function called make_shirt() that accepts a size and the text of message that should be printed on the shirt.
//The function should print a sentence summarizing the size of the shirt and the message printed on it.Call the function.
//ANSWER:
var sizeofShirt = ["small", "medium", "large"];
var shirt1 = "This shirt is for casual wearing";
var shirt2 = "This shirt is for formal wearing";
var shirt3 = "This shirt is for perty wearing";
function make_tshirt() {
    var simplefunction = "This is a".concat(sizeofShirt[0], "shirt,and ").concat(shirt3);
    console.log(simplefunction);
    return simplefunction;
}
var response = make_tshirt();
console.log(response);
