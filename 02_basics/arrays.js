const myarr=[1,2,3,4,5,6,7]
//console.log(myarr[3]);
const myarr2=new Array(1,2,3,4,5,6)
//console.log(myarr2[3]);
////////array methods//////////
// myarr.push(6);
// console.log(myarr);
// myarr.pop();
// console.log(myarr);
// myarr.unshift(9);
// console.log(myarr);
// myarr.shift();
// console.log(myarr);
// const newArr=myarr.join()//converts datatype into string
// console.log(myarr);
// console.log( typeof newArr)
// console.log("a",myarr)
// const myn1=myarr.slice(1,4)
// console.log(myn1);
// console.log("b",myarr);
// const myn2=myarr.splice(1,4)
// console.log(myn2);
// console.log("c",myarr);
//------------part 2 of arrays-------------------
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(allHeros);
const arr=[1,2,3,4,[1,2,3],4,5,6,[1,3,4,[5,6,]]]
const another_arr=arr.flat(Infinity)
// console.log(another_arr);
console.log(Array.isArray("farhana"));
console.log(Array.from("farhana"));
console.log(Array.from({name:"farhana"}));//specific keys need to mention
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));