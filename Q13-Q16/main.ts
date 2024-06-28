//Q13:
//YOUR OWN ARRAY:
//think of your  favourite mode of transportation,
//such as motorcyle or a car, and make a list that stores several examples.
//Use your list to print a series of statements about these items,
//such as:"I would like to own a car from my own money earned by myself"
                 //ANSWER:
//let transportationeMode = ["Honda Vezel", "corolla yaris", "suzuki cultus vxr", "SUV"];
//transportationeMode.forEach((Mode) =>
//console.log(`I would like to buy a ${Mode}`)
//);
//console.log(`But ${transportationMode[1]} is my dream car`);

//Q14:
//Guest List:If you could invite anyone, living or deceased, to dinner,
//who would you invite?Make a list that include at least three people,
// you'd like to invite to dinner.
//Then use your list to print a message to each person,inviting them to dinner.
//                    ANSWER

//let GuestList = ["Muhammad Usama", "Hussain Ahmed" , " Fatima-tuz-Zahra"];
//GuestList.forEach((invitation) =>
//console.log(`"Aslam.o.alaikum ${invitation},I would love to catchup over dinner!
//How about joing me fo a delicious meal this "Friday" at "Do Darya".
//let me know if you're free!`)
//);

//Q15:
//Changing Guest List:
//You just heared that one of yoour guest can't make up to the dinner,
//so you need to send out a new set of invitation.
//You'll have to think of some one else to invite.
//start with your program from Q14.Add a print statement at the end of your progress,
//starting with te name of guest who can't make it.
//Print a second set of invitation messages,one for each person who are still in your list.

//                        ANSWER:
//let newGuestList = ["Muhammad Usama", "Hussain Ahmed", "Fatima-tuz-Zahra"];

//console.log(`${newGuestList[1]} is not coming`)

//newGuestList.splice(1,1,"Mommy")

//newGuestList.forEach((newinvitation) =>
//console.log(`"Aslam.o.alaikum ${newinvitation}, I'd love to catch up over dinner!
//How about joining me for a delecious meal this "Saturday" at "8pm at "Do Dariya".
//Let me know if you are free!"`)
//)

//Q15:
//MORE GUEST:
//You just find a bigger dinner table,so now more space is available.
//Think of three more guest to invite for dinner.
//Sart with your program from Q15.Add a print statement to the end of your program,
//informing people that you found a bigger table.

//Add one new guest to the begining of your array.

//Add one new guest to middle of your array.Use append() to add one new guest to the end of your list.
//Print a new set of invitation messages, one for each persponm in yopur list.

                       //    ANSWER:
let  moreGuestList = ["Muhammad Usama", "Hussain Ahmed","Fatima-tuz-Zahra"];

console.log(`${moreGuestList[1]} is not comping`)

moreGuestList.splice(1,1,"Mommy")

console.log(`Aslam.o.alaikum everyone! We found a bigger dinner table..lets call some more guests`);
moreGuestList.unshift("Mr & Mrs Abu Bakar")

moreGuestList.push("Mr & Mrs Abdulbari")

let middleGuest: number=Math.floor(moreGuestList.length/2);
moreGuestList.splice(middleGuest,0,"Mr & Mrs Zia-ur-Rehman");

moreGuestList.forEach((moreinvitation) =>
    console.log(`Aslam.o.alaikum ${moreinvitation}, I'd love to catch up over dinner!
How about joining me for a delecious meal this "Saturday" at"8pm' at "Do Dariya".
let me know if you are free!`)
);