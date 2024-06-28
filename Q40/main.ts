//Q40:
//ALBUM:
//Write a function called make_album() that builds an object describing a music album. 
//The function should take in an artist name and an album title,and it should retyurn a object containing these two information.
//Use the function to make three dictionaries representing different albums.
//Print each return value to show that objects are storing the album information correctly.
//add an optional parameter to make_album() that allows you to store the number of tracks on an album.
//If the calling line includes a value for number of tracks, add hat value to the album's object.
//Make atleast one new function call that includes number of tracks on an album.


//ANSWER:
//It  does not includes track numbers:
//function make_album1(artistName:string,albumTitle:string){
 //   return{artistName,albumTitle}
//}
//let album1 = make_album1("Ali zafar", "psl song");
//let album2 = make_album1("Atif Asalam","Ipl song");
//let album3 = make_album1("Asim Azhar","cpl song");

//console.log(album1);
//console.log(album2);
//console.log(album3);


//It includes track numbers
function make_album2(artistName:string,albumTitle:string,numberofTracks?:number){
    return{artistName,albumTitle,numberofTracks}
}
let album4 = make_album2("Ali zafar", "psl song",30);
let album5 = make_album2("Atif Asalam","Ipl song",20);
let album6 = make_album2("Asim Azhar","cpl song");

console.log(album4);
console.log(album5);
console.log(album6);


