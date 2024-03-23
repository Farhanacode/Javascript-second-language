// function myname(){
//     console.log("farhana");//function-definition
// }
// myname();//function-call
function addtwonumbers(num1,num2){
    return(num1+num2)

}
//console.log(addtwonumbers(3,4));
function loginusername(username="farru"){
    if(!username){
        console.log("enter the username");
        return
    }

      return `${username} is logged in`
}
//console.log(loginusername())//undefined
//console.log(loginusername(""))//empty
//console.log(loginusername("farhana"))

function calculateprice(val2,...num1){
    return num1
}
//console.log(calculateprice(200,100,400,200));
const user={
    name:"farhana",
    age:23,
    price:700
}
function handleObject(anyobject){
    console.log(` customer ${anyobject.name} is the user and the age is${anyobject.age} paid upto ${anyobject.price}`);
}
handleObject({
    name:"farhana",
    age:23,
    price:700
})
const myarr=[100,200,300,400]
function returnsecondvalue(getArray){
    return getArray[1];
}
console.log(returnsecondvalue([100,200,300,40]));