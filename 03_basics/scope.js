var c=100;
let a=30;
if(true){
    let a=10;
    var c=300;
    //console.log("inner :",a);
}
// console.log(a);
// console.log(c);
function one(){
    const username="farhana"
    function two(){
        const website="youtube"
        //console.log(username);
    }
    //console.log(website);
    two()
}
one()
if (true) {
    const username = "farhana"
    if (username === "farhana") {
        const website = " youtube"
         //console.log(username + website);
    }
 //console.log(website);
}

//console.log(username);
// ++++++++++++++++++ interesting ++++++++++++++++++
// console.log(addone(3));
// function addone(num){

//     return num+1
// }
console.log(addtwo(8));
const addtwo=function(num){
    return num+1
}
