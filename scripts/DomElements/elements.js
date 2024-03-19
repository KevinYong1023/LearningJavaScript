//Access elements:
const parent = document.getElementById("parent")
const child = document.getElementsByClassName("child") // with the use of this class name it will return a series of collection
parent.style.color = "red"
const modChild = child[0]
modChild.style.color = "green"

// Manipulate elements:
// Adding elements:
const body = document.body 
body.append("Welcome to DOM Element");

// Create Element with Text:
const newEle = document.createElement("div");
newEle.innerText = "createElement helped us to create element into the HTML, InnerText helped us to input texts inside the div"
newEle.textContent = "textContent is the same as innerText"
body.append(newEle); // we adding the div into the HTML

// Create Element with HTML:
const newBtn = document.createElement("button")
newBtn.innerHTML = "<div>Button text</div>"
body.append(newBtn)