const accountId = 145544 // Const is used to declare fixed value (it can't be chaged)
let accountEmail = "demo@google.com" // let is used for block scope
var accountPassword = "12345"
accountCity = "Mumbai"

//accountId = 2 // not allowed to change declared const
accountEmail = "sumit123@gmail.com"
accountPassword = "5321"
accountCity = "Pune"

console.table([accountId,accountEmail,accountPassword,accountCity]);
