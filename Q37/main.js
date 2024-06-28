//Large Shirts:
//Modify the make_shirt() function so that  shirts  are large by default,with a message that reads
//i love TypeScript.Make a large shirt and a medium shirt with a default message,and a shirt of any size with 
//a different message.
//ANSWER:
var size = ["medium", "large"];
var defaultMessage = "I love TypeScript";
var mediumshirt = ("size of shirt is: ".concat(size[0], ",").concat(defaultMessage));
var largeshirt = ("size of shirt is: ".concat(size[1], ",").concat(defaultMessage));
var smallshirt = ("size of shirt is: small and I love Drawing");
var extralargeshirt = ("size of shirt is: extra large and I love Travelling");
function make_tshirt() {
    var simplefunction = (smallshirt);
    console.log(simplefunction);
    return simplefunction;
}
var response = make_tshirt();
console.log(response);
