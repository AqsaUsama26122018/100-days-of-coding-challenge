//Q20:
//Think of something you could store in  an array.For example you could make a list of
//mountains,rivers, countries,cities,languages or anything else you would like.
//Write a program that creates a list containing these items.
//ANSWER:
// countries : string[] = ["Madina", " Makkah", "Qatar", "Oman", "Dubai"];
//print list of countries.
//countries.forEach(country => {
//   console.log(country);
//});
//Q21:They think of something you  could store in typescript object.
//Write a program that creates  objects containing these items.
//ANSWER:
//interface itCourse{
//   name: string;
//   location: string;
//   onsiteStudents: number;
//}
//let itCourse = {
//    name: "Typescript and Javascript",
//   location: "Governer House Sindh",
//   onsiteStudents: 50000
//}
//console.log(itCourse);
//Q22:INTENTIONAL ERROR:
//If you have not recieved an array index error in one of your program yet,try to make one happen.
//change an index in one of your program to produce an index error.
//Make sure you correct the error before closing the program.
//ANSWER:
//let errorArray: string[] =["A", "B", "C", "D"];
//producing error!  by accessing invalid index of array.
//console.log(errorArray[5]);
//correcting the error in the end:
//console.log(errorArray[3]);
//Q23:
//CONDITIONAL TEST:
//Write a series of conditional tests. Print a statement describing each test and your prediction 
//for  the result of each test.Your code should look something like this:
//let car = 'subaru';
//console.log("Is car =='subaru'? I predict True.)
//console.log(car == 'subaru')
//look closely at your results,and make sure you understand why eacy line evaluates to true or false.
//create atleast 10 tests.Have atleast 5 test evaluate to true and another 5 tests evaluate to false.
//ANSWER;
var five = 5;
var ten = 10;
//Test 1;
console.log("Test 1; five is equal to 5");
console.log(five == 5);
//Test 2:
console.log("Test 2: ten is equal to 10");
console.log(ten == 10);
//Test 3:
console.log("Test 3: five is not equal to 10");
console.log(five !== 10);
//test 4:
console.log("Test 4; ten is greater than 5");
console.log(ten > 5);
//Test 5:
console.log("Test 5: 5 is less than 10");
console.log(five < 10);
//Test 6:
console.log("Test 6: 10 is less than 5");
console.log(ten < 5);
//Test 7:
console.log("Test 7: 5 is equal to 10");
console.log(five = 10);
//Test 8:
console.log(" Test 8: 10is not equal to 10");
console.log(ten !== ten);
//Test 9:
console.log("test 9 : 5 is greater than 10");
console.log(five > ten);
//Test 10:
console.log(" test 10 : five is not equal to 5");
console.log(five !== 5);
