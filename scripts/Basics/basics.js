// Variable and Datatype and Conversion:

// Datatype:

// String:
let user = 'John'
// Number:
let age = 25;
let salary = 12.345;
// Boolean:
let validity = true;

// type of: Check the type of the variable:
alert(`This 'user' is a ${typeof user}`)
alert(`This 'age' is a ${typeof age}`)
alert(`This 'salary' is a ${typeof salary}`)
alert(`This 'validity'  is a ${typeof validity}`)

// Variable: 
// - We can only declare once.
// - Name must contain only: letters, digits, symbols ($, _)
// let keyword: is a changable keyword
// Create variable: declare the variable by using the 'let' keyword
let message; // we can set an empty variable
message = 'Hello World'// We create the value here
alert(message)

//Repalce variable value:
message = "Goodbye ! " // Replaced "Hello World" to "Goodbye !"
alert(message) 

// const keyword: unchangeable keyword 
const my_Record = "10 seconds";
// This will throw error as const cannot change the value: my_Record="20 seconds"; 
alert(my_Record);


// Arthimetric operators: 
// Maths:
let x = 1
let y = 2
// Addtion:
alert(`Addition: ${x+y}`)
// Subtraction:
alert(`Subtraction: ${x-y}`)
// Multiplication:
alert(`Multiply: ${x*y}`)
// Division :
alert(`Division: ${x/y}`)
// Remainder:
alert(`Remainder shows ${x} odd number: ${x%y}`)
alert(`Remainder shows ${y} even number: ${y%x},`)
// Exponentiation: square value
alert(y**y + ": 2² = 4") // 2² = 4
alert(y**3 + ": 2³ = 8") // 2³ = 8
alert(y**4 + ": 2⁴ = 16") // 2⁴ = 16

// String format: Concatenation
alert("This is my favourite number"+" "+123)
alert(message+" "+x+" "+y)

// Method: Concat:
let concatedText = my_Record.concat(message)
alert(concatedText)

// Conversion: 
// Convert to String
let negativeValue = -12;
alert(typeof(negativeValue)) // return Number
negativeValue = String(negativeValue);
alert(typeof(negativeValue)) // return String

// Convert to Number:
let n = "1234.123";
alert(typeof(n)) // return String
n = Number(n);
alert(typeof(n)) // return Number

// Convert to Boolean:
let value = "true";
alert(typeof(value)) // return String
value = Boolean(value);
alert(typeof(value)) // return Boolean