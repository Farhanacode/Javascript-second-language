const user={
     regular:"farhana",
     price:7777,
     age:23,
     welcomemessage:function(){
        //console.log(`${this.regular},welcome to the website`);
        //console.log(this);
     }
}
// console.log(this);
// function chai(){
//         let username = "hitesh"
//         console.log(this.username);
//     }

//      chai()
// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()
// const chai =  () => {
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()
const addtwo=(num1,num2) => (num1+num2)
console.log(addtwo(2,3));
    