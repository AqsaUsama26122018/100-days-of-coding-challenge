//Q18:
//SEEING THE WORLD:
//Think of atleast 5 places in the world you would like to visit.
//Store the location in an array.Make sure the array is not in alphabetical order.
//Print your array in its original order.
//Print your array in alphabetical order withouyt modifying the actual list.
//Show that your array is still in its original order by printing it.
//Print your array in reverse alphabetical ordr without changing the order of original list.
//Show that your array is still in its opriginal position by printing itagain.
//Reverse the order of your list.Print the array to show that the order has changed.
//Reverse the order of your list again.Print the array to show its back to its original order.
//Sort your array so its stored in alphabetyical order.Print the array to show that its order has been changed.
//Sort to change your array so its stored in reverse alphabetical order.Printthe list to show that its order has changed.
//ANSWER
var placestoVisit = ["Madina", "Makkah", "Oman", "Qatar", "Dubai"];
//printing ints original order.
console.log("Original order:", placestoVisit);
//printing your arrayu in alphabetical order:
console.log("Alphabetical order:", placestoVisit.slice().sort());
//array is still in its original order
console.log("Original order after sorting:", placestoVisit);
//printing your array in reverse alphabetical order
console.log("Reverse alphabeticatical order:", placestoVisit.slice().sort().reverse());
//array is still ints original order
console.log("Original order after reverse sorting:", placestoVisit);
//reverse the order of list
placestoVisit.reverse();
console.log("Reverse order:", placestoVisit);
//reverse the order of your list again
console.log("Back to its original order:", placestoVisit);
//sort your array so it's stored in alphabetical order
console.log("Sorted in alphabeticalorder:", placestoVisit.slice().sort());
//sort to change array so it's stored in reverse alphabetical order
console.log("Stored in reverse alphabetical order:", placestoVisit.slice().sort().reverse());
