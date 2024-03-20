//objects can be defined in two types <=1.literal and 2.construct
//singleton--definr through construct way
//object.create
const mysym=Symbol("grade")
 const myuser={
    name:"farhana",
    "fullname":"farhana Shaik",
    [mysym]:"key1",
    age:23,
    email:"farhana@google.com",
    city:"gudur"
 }
//  console.log(myuser.age);
//  console.log(myuser["fullname"]);
 //console.log (myuser[mysym]);
// console.log(myuser);
myuser.email="rajesh@google.com"
// Object.freeze(myuser)
// myuser.email="farru@google.com"
//console.log(myuser);
myuser.greeting=function(){
    console.log("hello my user");
}
myuser.greetingtwo=function(){
    console.log(`hello user, ${this.fullname}`);
}
console.log(myuser.greeting());
console.log(myuser.greetingtwo());