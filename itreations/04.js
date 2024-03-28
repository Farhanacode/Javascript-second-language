const myobj={
    fullname:"farhana",
    age:23,
    gender:"female"
}
for (const key in myobj) {
   //console.log(`Details of r person ${key} their information ${myobj[key]}`);
}
//array
const programming=["java","python","cpp","js"]
for (const key in programming) {
    //console.log(programming[key]);
}//default arrays have index as keys
//map
const map=new Map()
map.set('in',"india")
map.set('jn',"japan")
for (const key in map) {
    console.log(key);
}//non-iterable in this key
