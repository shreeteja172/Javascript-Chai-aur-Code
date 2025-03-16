const name = "Shreeram";
const yug = "Treta";
const siblings_names = "Lakshman, Bharat, Shatrughan";

const message = `Hello, Lord ${name}! He is from ${yug} yug. His siblings are ${siblings_names}.`;
//string interpolation
console.log(message);


const gameName = "Cricket";
const players = "11";
const overs = "50";
const message1 = `The game ${gameName} is played with ${players} players and ${overs} overs.`;
console.log(message1);





const yudh = new String("Mahabharat");
console.log(yudh);
//new keyword is used to create a string object
//String is a constructor function
//String is a wrapper object for primitive string data type
console.log(typeof yudh);
console.log(yudh[0]);
console.log(yudh.__proto__);
//__proto__ is a property of the object
//It is used to access the prototype of the object
console.log(yudh.length);

console.log(yudh.toUpperCase());
console.log(yudh.toLowerCase());
console.log(yudh.indexOf("b"));
//indexOf() is used to find the index of a character in a string
console.log(yudh.charAt(4));

const yudh2 = yudh.substring(3, 7);
console.log(yudh2);

const yudh3 = yudh.slice(3, 7);
console.log(yudh3);


const yudh4 = "           Mahabharat - A great epic.           ";
console.log(yudh4.trim());
//trim() is used to remove the white spaces from the beginning and end of the string

const url = "https://www.google.com";
console.log(url.startsWith("https"));
console.log(url.endsWith("com"));
console.log(url.includes("google"));
console.log(url.repeat(3));
//repeat() is used to repeat the string multiple times
console.log(url.replace("google", "youtube"));
//replace() is used to replace a string with another string

