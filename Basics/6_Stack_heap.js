//Stack ,Heap (Primitive and Reference Types)
//Stack is a place in memory where the primitive data types are stored.
//Heap is a place in memory where the reference data types are stored.
//Primitive data types are stored in stack memory.
//Reference data types are stored in heap memory.
//Stack is faster than heap.
//Stack memory is limited.
//Heap memory is unlimited.
//Stack memory is automatically allocated.
//Heap memory is manually allocated.
let ytname = "Krishna";
let ytname1 = ytname;
console.log(ytname, ytname1);
ytname1 = "Balaram";
console.log(ytname, ytname1);
//Output: Krishna Krishna
//        Krishna Balaram

let user = {
    name: "Krishna",
    Avatar_number : 8,
    Yug_name : "Dwapar",
}
let user1 = user;
console.log(user, user1);
user1.name = "Balaram";
user1.Avatar_number = "Not an avatar";
console.log(user1);
