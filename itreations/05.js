//for each-arrays(high order function)
const programming=["java","cpp","python","go"]
programming.forEach(function (items,index,arr){
    //console.log(items,index,arr);
})//normal function & multiple arguments pass also happens
programming.forEach((items) =>{
//console.log(items);
})//arrow function
function name(items){
//console.log(items);
}
programming.forEach(name)//function name
const coding=[
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
coding.forEach((item) =>{
    //console.log(item.languageName);
})

const pcoding = ["js", "ruby", "java", "python", "cpp"]


const values = pcoding.forEach( (item) => {
    //console.log(item);
    return item
} )

console.log(values);//for each loop can,t return values it returns undefined