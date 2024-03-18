// Condition checking:
const a = 1
const b = 10
const c = 5

// Directly checking
alert(a>b) // False

// If-else if-else statements:
// >: bigger 
// <: smaller
// >= : bigger or equal
// <= : smaller or equal
// == : equal/same

// This will run the entire statements (line 16-23): 
if (a>b){
    alert("Value of A is not bigger than Value of B")
}else if(a==b){
    alert("Value of A is same as Value of B")
}else{
    alert("Value of A is bigger than Value of B")
}

// Example: Check value is a odd or even number:
const check_A_remainder = a%2
const check_B_remainder = b%2
if (check_A_remainder == 0){
    alert("A is an even number")
}else{
    alert("A is an odd number")
}

if (check_B_remainder == 0){
    alert("B is an even number")
}else{
    alert("B is an odd number")
}

// Example: Use A,B,C to check and compare the value with the number 5
const value_to_check = a
if (value_to_check>=5){
    alert("value is bigger or equal than 5")
}else if(value_to_check<=5){
    alert("value is smaller or equal than 5")
}else if(value_to_check==5){
    alert("value is equal to 5")
}

// Nested condition checking: is the value integer and the check and compare the value with the number 5
if (Number.isInteger(value_to_check)){
    if (value_to_check>=5){
        console.log("value is bigger or equal than 5")
    }else if(value_to_check<=5){
        console.log("value is smaller or equal than 5")
    }else if(value_to_check==5){
        console.log("value is equal to 5")
    }
}else{
    console.log("Value is not integer")
}

// Switch statement:
let food = "ice-cream cake"

switch (food) {
    case "ice-cream cake":
        alert("You ordered a ice-cream cake")
        break;
    case "bread":
        alert("You ordered a bread")
    default:
        alert("You ordered a cake")
        break;
}