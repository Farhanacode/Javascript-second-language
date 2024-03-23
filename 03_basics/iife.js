//Immediately Invoked function Expressions(IIFE)
//immediately excuted and avoid polluted of global scope
(function namde(){    //named iife
    console.log(`db connected`);
})();

( (name) =>{ //simple iife
   console.log(`db connection two ${name}`); 
})("farhana") //parameters passing also

//two iife can separated by ;