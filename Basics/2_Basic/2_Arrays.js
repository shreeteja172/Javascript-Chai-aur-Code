const heroes = ['Krishna', 'Rama', 'Ganesh', 'Siva', 'Vishnu'];
const villains = ['Ravana', 'Kamsa', 'Shakuni', 'Duryodhana', 'Hiranyakashipu'];

// heroes.push(villains); //adds  as array
// console.log(heroes);

// const characters = heroes.concat(villains); //adds as elements
// console.log(characters);


const chars = [...heroes, ...villains]; //adds as elements

console.log(chars);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Krishna"));
console.log(Array.from(""))
console.log(Array.from({name: ""})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));