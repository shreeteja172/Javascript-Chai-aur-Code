

const JSuser = {
    name: 'John',
    age: 30,
    email: "Johndoe@gmail.com",
    hobbies: ['music', 'sports'],
    "fav-color": "black",
    [mySym]: "mykey1",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JSuser.name);
console.log(JSuser["name"]);
// .name is same as ["name"].....the reason why ["name"] is used is when the key is a string with spaces or special characters like fav-color
console.log(JSuser["fav-color"])


JsUser.email = "@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());;