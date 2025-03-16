//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt
// string gives string type of ,number gives number type of, boolean gives boolean type of, null gives object type of, undefined gives undefined type of, symbol gives symbol type of, bigint gives bigint type of
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const gods = [ 'Krishna', 'Rama', 'Shiva' , 'Ganesh', 'Hanuman', 'Saraswati', 'Lakshmi', 'Durga', 'Kali', 'Brahma', 'Vishnu',];


const mahabharat_characters = [ 'Krishna', 'Arjuna', 'Bhima', 'Yudhisthira', 'Nakula', 'Sahadeva', 'Draupadi', 'Duryodhana', 'Karna', 'Bhishma', 'Drona', 'Kripacharya', 'Vidura', 'Shakuni', 'Gandhari', 'Dhritarashtra', 'Satyaki', 'Abhimanyu', 'Kunti', 'Shikhandi', 'Dhrishtadyumna', 'Draupadi', 'Dushasana', 'Vikarna,', 'Kritavarma', 'Ashwatthama', 'Ulupi', 'Uttara', 'Vasudeva', 'Subhadra', 'Parikshit', 'Janamej ,Shantanu', 'Ganga', 'Vichitravirya', 'Ambika', 'Ambalika'];


let myObj = {
    name: "Teja",
    age: 18,
}
console.log(gods);


const myFunction = function(){
    console.log("Basic Function");
}

console.log(typeof anotherId);
