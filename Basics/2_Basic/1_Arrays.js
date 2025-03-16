//arrays


const myArr = [0,1,2,3,4,5,6,7]
const Avatars = ['Krishna','Shreeram','Matsya','Kalki']

console.log(Avatars[0]);


//array methods

Avatars.push('Narasimha')
Avatars.push('Vaman')
console.log(Avatars);
//push() is used to add an element at the end of the array

Avatars.pop()   //removes the last element from the array
console.log(Avatars);

Avatars.unshift('Varaha')
console.log(Avatars);
//unshift() is used to add an element at the beginning of the array
//waste because you need to change the index of all the elements

Avatars.shift()
console.log(Avatars);
//shift() is used to remove the first element from the array

console.log(Avatars.includes('Shreeram'));



const Characters = Avatars.join(' - ')
console.log(Characters);
//join() is used to convert an array into a string

//splice,slice

console.log("A" ,Avatars);

const DwaparYug = Avatars.slice(0, 1)
console.log(DwaparYug);

console.log("B" ,Avatars);

const TretaYug = Avatars.splice(1, 2)
console.log(TretaYug);

console.log("C" ,Avatars);

// splice() is used to remove elements from the array
// slice() is used to create a new array from the existing array