const mynum=[1,2,3]
// const newnum=mynum.reduce(function(acc,currval){
//     //console.log(`accumulalator ${acc} and currenval:${currval}`);
//   return acc +currval
// },3)
const newnum=mynum.reduce((acc,curr)=>acc +curr,0)
//console.log(newnum);
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const totalprice=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(totalprice);