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
console.log(loginusername("farhana"))
