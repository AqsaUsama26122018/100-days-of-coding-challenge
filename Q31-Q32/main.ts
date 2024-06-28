//100 DAYS OF CODING CHALLENGE:
//These total 45 questions in the starting are4 also included in 
//100 days of coding challenge and can also be said a part of it.


//We are using the array of question #30 here, we ahve to make sure that
// its array isn't empty. We will check whether its empty or not by using
// if statements condition.

//Q31:
//Add an if test to exerciose 30 to make sure that the list of user is not empty
//If list is empty,print the message:" We need to find some users!".
//Remove all the usernames from your array,and make sure the correct message is printed.

//ANSWER:
//Q31:

//let userNames = ["Muhammad Usama","Aqsa Usama","Admin","Hussain Ahmed","Fatima-tuz-Zahra"];

//userNames =[]

//if (userNames.length === 0) {
 //   console.log("We need to find some opther users!");   
//}else{userNames.forEach(oneUser =>{
  //  if (oneUser === "Admin"){
  //      console.log(`Hello ${oneUser}, would you like to see some status repoert?`);
    //    }else{
    //        console.log(`Hellio ${oneUser}, thank you for loging in again.`);
       //      };
//});
//}

//ANSWER  32:
let current_users =["Muhammad Usama","aqsa usama","Abdulbari","fatima-tuz-zahra","Hussain"]

let new_users = ["khaula","Qandeel","Aqsa Usamas","Fatima-tuz-Zahra","Zunera"]

new_users.forEach(new_one_user => {
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase()=== new_one_user.toLowerCase())
    if(our_condition){
        console.log(`Sorry ${new_one_user} is already taken!`);
        }else{
            console.log(`This Username ${new_one_user} is available`);
            }
})
