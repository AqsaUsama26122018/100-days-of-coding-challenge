//Q35:
//ANIMALS:
//Think of atleast three different animals taht have a common characteristic.
//Store the name of thes animals in a list,and then use a for loop to print out the name of each animal.
//modify your program to print a statement about each animal such as A dog would make a great pet.
//add a line at the end of your program starting what yhese animal have in common.You could print
//a sentence such as any of these animals would make a grat pet!.

//ANSWER:
let animalPet: string[] =["Dog","Cat","Rabbit"]
console.log((`Animals Names ;\n`));

for(let i=0; i<animalPet.length; i++){
    console.log(`${animalPet[i]}`);
}

console.log(`statements:\n`);

for(let i=0; i<animalPet.length; i++){
    console.log(`\nA ${animalPet[i].toLowerCase()} would make a great pet!`);
}

console.log("\nAny of these animals would make a great pet!");
