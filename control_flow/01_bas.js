//if
// const islogged=false
// if (islogged==true){
//     console.log("user is logged");
// }else{
//     console.log("user is not logged");
// }
// const score=200
// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// //console.log(`User power: ${power}`);
// const balance = 1000

// if (balance > 500){

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }
// }
// const userLoggedIn = true
// const debitCard = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = true

// if (userLoggedIn && debitCard && 2==2) {
//     console.log("Allow to buy course");
// }

// if (loggedInFromGoogle || loggedInFromEmail) {
//     console.log("User logged in");
// }
//--------------------switch------------------
// let month="feb"
// switch (month) {
//     case "jan":
//         console.log("january");
//         break;
//     case "feb":
//         console.log("febuary");
//         break;

//     default:
//         console.log("invalid month");
//         break;
// }
//---------------default truthy and fasly values--------------------
let useremail=[]
// if(useremail){
//     console.log("got user email");
// }else{
//     console.log("invalid user");
// }

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

//  if (useremail.length === 0) {
//     console.log("Array is empty");
//  }
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terntiary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")