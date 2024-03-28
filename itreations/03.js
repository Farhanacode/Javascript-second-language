//for of
const arr=[1,2,3,4,5]
for (const num of arr) {
   // console.log(num);
}//arrays
const greetings="hello guys"
for (const greet of greetings) {
    // if(greet==" "){
    //     continue
    // }
   // console.log(`each char is ${greet}`);
}
//Maps
const map=new Map()
map.set('In',"india")
map.set('us',"united states")
//console.log(map);
for (const [key,value] of map) {
    //console.log(key,':-',value);
}
const myobj={
    Fullname:"farhana",
    age:23
}
for (const [key] of myobj) {
    console.log(key);
}//for of objects non itreable soo we use for in