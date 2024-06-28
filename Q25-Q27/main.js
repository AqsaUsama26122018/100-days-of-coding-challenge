//Q25:
//ALIEN COLORS#1
//Imagine an alien was just shot down a game.Create a variable called alien_color and
// assign it a value of "green","yellow",or "red".
//Write an if statement to test whether the alien's color is green.If it is,
//print a message that the player just earned 5 points.
//Write one version of this program that passes the if test and another that fails.
//(The verson tat fails will have no output.)
//ANSWER:
//let alien_color ="green"
//if(alien_color === "green"){
//   console.log("Player just earned 5 points.");
//}
//if(alien_color === "white"){
//  console.log("alien color is white.");
//}
//Q26:
//ALIEN COLORS #2:
//Choose a color for an alien as you did in exercise25,and write an if else chain.
//if the alien's color is green,print a statement
// that a player just earned 5 points for shooting the alien.
//If the alien color is noyt green,print a statement that player just earned
//10 points.
//Write one version of this program.
//that runs the if block and another that runs the block.
//ANSWER:
//First version:
//let alien_color = "green"
//if (alien_color === "green") {
// console.log("Alien color is green,player just earned 5 points for shooting the alien");
//  } else{
//    console.log("Alien color is not getEnvironmentData,player earned 10 points");
//}
//Second version:
var alien_color = "red";
if (alien_color === "green") {
    console.log("Alien color is green,player just easrned 5 points for shooting the alien");
}
else {
    console.log("Alien color is noit green,player earned 10 points");
}
//Q27:
//ALIEN COLORS #3:
// Turn your if-else chain from exercise 5-4 into an if else chain.
//If the alien is green,print a message that a player earned 5 points.
//If the alien is yellow,print a message that a player earned 10 points.
//if the alien is red,print a message that the player earned 15 points.
//write three versions of this program,making sure that 
//each message is printed for the appropriate color alien.
//ANSER:
//FIRST VERSION:
//let alien_color ="green"
//if (alien_color === "green") {
//  console.log("(version 01) Alien color is green,player earned 5 points");
//}else if (alien_color === "yellow"){
//   console.log("(version 01) Alien color is yellow,player earned 10 points");
//}else if (alien_color === "red") {
//  console.log("(version 01) Alien color is red,player earned 15 points");
//}
//SECOND VERSION:
//let alien_color = "yellow"
//if(alien_color === "green"){
//   console.log("(version 02) Alien color is green,player earned 5 points.");
//} else if (alien_color === "yellow"){
//  console.log("(version 02) Alien color is yellow, player earned 10 points.");
//} else if (alien_color ==="red"){
//   console.log("(version 02) Alien color is red, player earned 15 points.");
//}
//THIRD VERSION:
//let alien_color = "red"
//if(alien_color === "green"){
//   console.log("(version 03) Alien color is green,player earned 5 points.");
//} else if (alien_color === "yellow"){
//  console.log("(version 03) Alien color is yellow, player earned 10 points.");
//} else if (alien_color ==="red"){
//  console.log("(version 03) Alien color is red, player earned 15 points.");
//}
