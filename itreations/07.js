const mynum=[1,2,3,4,5]
//const newnum=mynum.map((num)=>num*2)
//console.log(newnum);//map//
//chaining(use multiple tasks such as map and filter)
const  newnum=mynum
.map((num)=>num*2)
.filter((num)=>num>=4)
.map((num)=>num+1)
console.log(newnum);