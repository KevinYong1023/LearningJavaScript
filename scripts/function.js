// Functions: easy to call the methods without repetition

// Function:
function showMessage(){
    console.log("This is a message")
}

showMessage() // called the message

// Function with parameters:
// - Must input value to the parameter once declared
function customMessage(text){
    console.log("This is a message that you inserted: "+ text)
}
// We input our message(s) while call the function
customMessage("Hello World")


// Function to return the value to variable:
function checkValidation(c){
    if (c == "white"){
        return "You selected white, you may start your move";
    }else{
        return "Please wait your turn";
    }
}

const color = "white";
let move = checkValidation(color)
console.log(move)
