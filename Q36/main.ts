//Q36:
//T-SHIRTS:
//Write a function called make_shirt() that accepts a size and the text of message that should be printed on the shirt.
//The function should print a sentence summarizing the size of the shirt and the message printed on it.Call the function.

//ANSWER:
let sizeofShirt: string[] = ["small","medium","large"]
let shirt1 ="This shirt is for casual wearing"
let shirt2 ="This shirt is for formal wearing"
let shirt3 ="This shirt is for perty wearing"

function make_tshirt(){
    let simplefunction =`This is a${sizeofShirt[0]}shirt,and ${shirt3}`
    console.log(simplefunction);
    return simplefunction   
}

let response = make_tshirt()
console.log(response);

