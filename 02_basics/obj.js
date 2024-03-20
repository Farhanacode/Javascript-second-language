const tinderuser={}
tinderuser.id="12345@rg"
tinderuser.name="farhana"
tinderuser.age=23
// console.log(tinderuser);
const regularuser={
         email:"farhana@google.com",
         fullname:{
                username:{
                    firstname:"Farhana",
                    lastname:"shaik"
                }
         }
}
//console.log(regularuser.fullname.username.lastname);
const obj1={1:'a',2:'b'}
const obj2={3:'a',4:'b'}
//const obj3=Object.assign({},obj1,obj2);

// const obj3={...obj1,...obj2};
// console.log(obj3);
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "h@gmail.com"
    },
    {
        id: 3,
        email: "h@gmail.com"
    },
]
// console.log(users[2].email);
console.log(tinderuser);
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));
console.log(tinderuser.hasOwnProperty('gender'));