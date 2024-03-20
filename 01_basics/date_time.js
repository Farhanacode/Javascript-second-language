//let myDate=new Date()
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toJSON());
//console.log(typeof myDate);//object
// let mycreateDate = new Date(2024,2,20)
// let mycreateDate = new Date(2024,2,20,3,4)
//let mycreateDate = new Date("2024-03-20")
let mycreateDate = new Date("03-20-2024")
//console.log(mycreateDate.toLocaleString());
let myTimestamp=Date.now()
//console.log(Math.floor(myTimestamp/1000));
let newDate= new Date("04-14-2024")
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());
newDate.toLocaleString('default',{
    weekday:"long",
    
})