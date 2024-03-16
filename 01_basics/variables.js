const accountId = 144553
let accountEmail = "farhana@google.com"
var accountPassword = "12345"
accountCity = "nellore"
let accountState;

// accountId = 2 // not allowed


accountEmail = "farru@.com"
accountPassword = "21212121"
accountCity = "hyderabad"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])