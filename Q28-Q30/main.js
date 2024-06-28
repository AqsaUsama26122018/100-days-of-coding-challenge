"use strict";
//Q28:
//STAGES OF LIFE:
//Write an if else chain that determiones a person's stage of lif.Set a value for the variable age and then:
//If the person is less than 2 years old,print a message that the person is a baby.
//If a person is at least 2 years old but less than 4,print a message that the person is a toddler.
//If a person is atleast  4 years old but less than 13,print a message that the person is a kid.
//If the person is atleast 13 years old but less than 20,print a message thst the person is a teenager.
//If the person is atleast 20 years old but less than 65,print a message that the person is an adult.
//If the person is age 65 or older,print a message that the person is an elder.
Object.defineProperty(exports, "__esModule", { value: true });
//ANSWER:
//Creating a variable:
//let age = 32;
//if the person is less than 2 years old, print amessage that the person is a baby.
//if(age <2){
//   console.log("You are a baby");
//} 
//If the person is atleasty 2 years old but less than 4, print a message that the person is a toddler. 
//else if(age >= 2 && age< 4) {
//  console.log("You ate a toddler");
//}
//If the person is at least 4 years old but less than 13,print a message that the person is a kid.
//else if(age >= 4 && age< 13){
//  console.log("You are a kid");
//}
//If the person is atleast 13 years old but is less than 20,print a message that the person is a teenager.
//else if(age >=13 && age <20){
//   console.log("You are a teenager");
//}
//If the person is atleast 20 years old but less than 65,print a message that the person is an adult.
//else if(age >= 20 && age <65){
//   console.log("You are an adult");
//}
//If the person is 65 or older,print a message that the person is elder.
//else if(age >= 65){
//   console.log("You are an elder");
//   }
//Q29:
//FAVOURITE FRUIT:
//Make an array of your favourite fruits,and then write a series of independent if statements 
//that check for certain fruits in your array.
//Make an array of your three favourite fruits and call it favourite_fruits.
//Write five if statements,each should check whether a certain kind of fruit is in your array.
//If the fruit is in your array,the if block should print a statement,such as " you really like bananas!".
//ANSWER:
//let favourite_fruits: string[] = ["Mango","Strawberry","Cherry","Watermelon","Pineapple"]
//if(`${favourite_fruits[0]}`==="Mango"){
// console.log("I like Mango");
//}
//else{
// console.log("I don't like this fruit");
// }
// if(`${favourite_fruits[1]}`==="Strawberry"){
//  console.log("I like Strawberry");
// }
//else{
// console.log("I don't like this fruit");
// }
// if(`${favourite_fruits[2]}`==="Cherry"){
//  console.log("I like Cherry");
//  }
//else{
//console.log("I don't like this fruit");
//}
//if(`${favourite_fruits[3]}`==="Avacado"){
// console.log("I like Chikoo");
//}
//else{
//  console.log("Idont like this fruit");
//}
//if(`${favourite_fruits[4]}`==="Custard Apple"){
//  console.log("I like Peach");
// }
//else{
// console.log("Idont like this fruit");
// }
//Q30:
//HELLO ADMIN:
//Make an array of five or more usernames,including the name "admin".Imagine you are writing
//code that will print a greeting to each user after they log in to a website.
//Loop through the array,and print a greeting to each user:
//If the username is "admin", print a special greeting,such as Hello admin would you like to see astatus report?
//Otherwise,print a generic greeting,such as Hello Eric,thank you for loging in again.
//ANSWER:
 var userNameserNames = ["Muhammad Usama", "Aqsa Usama", "Admin", "Hussain Ahmed", "Fatima-tuz-Zahra"];
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ",would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ",thank you for loging in again"));
    }
});
