//Large Shirts:

//Modify the make_shirt() function so that  shirts  are large by default,with a message that reads
//i love TypeScript.Make a large shirt and a medium shirt with a default message,and a shirt of any size with 
//a different message.

//ANSWER:
let size: string[] =["medium","large"]
let defaultMessage = "I love TypeScript"
let mediumshirt =(`size of shirt is: ${size[0]},${defaultMessage}`)
let largeshirt =(`size of shirt is: ${size[1]},${defaultMessage}`)
let smallshirt =(`size of shirt is: small and I love Drawing`)
let extralargeshirt =(`size of shirt is: extra large and I love Travelling`)

function make_tshirt(){
    let simplefunction = (smallshirt)
    console.log(simplefunction);
    return simplefunction
}

let response = make_tshirt()
console.log(response);

