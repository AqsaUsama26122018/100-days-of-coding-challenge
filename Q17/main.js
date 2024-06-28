//Q17:
//Shrinking Guest List:
// You just Found out that your  new dinner table won't arrive in time for dinnner,
//and you have space for only two guests,
//Start yor program from Q17.Add a new line that print a message saying that'
//you can only invite two persons for dinner.
//Remove guests from your list one at a time until only two names reamain in your list.
//Each time you pop a name from your list,print a message to that person,
//letting them know you're sorry you can't invite them to dinner.
//print  a message to each of two people still on your list, letting them know they're still invited.
//Remove the last two names from your list, so you have an empty list.Print your list to make sure
//you actually have an empty list at the end of your program.
//ANSWER:
var shrinkGuestList = ["Muhammad Usama", "Hussain Ahmed", "Fatima-tuz-Zahra"];
console.log("".concat(shrinkGuestList[1], " is not coming"));
shrinkGuestList.splice(1, 1, "Mommy");
console.log("Aslam.o.alaikum everyone! We found a bigger dinner table. Lets call some more guests");
shrinkGuestList.unshift("Mr & Mrs Abdul bari");
shrinkGuestList.push("Mr & Mrs Abu Bakar");
var middleGuest = Math.floor(shrinkGuestList.length / 2);
shrinkGuestList.splice(middleGuest, 0, "Mr & Mrs Zia-ur-Rehman");
shrinkGuestList.forEach(function (shrinkinvitation) {
    return console.log("\"Aslam.o.alaikum ".concat(shrinkinvitation, ", I'd love to catch up over dinner!\nHow about joining me for a delecious meal this \"Saturdat\" at \"8pm\" at \"Do Dariya\".\nLet me Know if you are free!"));
});
console.log("Unfortunately, new dinner table won't arrive at time for dinner,so I have spacefor only 2 guests for dinner");
while (shrinkGuestList.length > 2) {
    var removeGuest = shrinkGuestList.pop();
    console.log("Sorry, ".concat(removeGuest, " I can't invite you to dinner"));
}
console.log("invitation to the last two guest");
shrinkGuestList.forEach(function (guestinvitation) { return console.log("Aslam.o.alaikum ".concat(guestinvitation, " you are still invited for dinner")); });
shrinkGuestList.pop();
shrinkGuestList.pop();
console.log(shrinkGuestList, "Empty List");
