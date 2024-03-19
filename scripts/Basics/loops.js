// Loops: repeat the code multiple times.

// While loop: it will continue execute until the condition is met. 
let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  console.log( i );
  i++;
}

// For loop: 
// - Similar to while loop, run until the condition didn't meet
// - it will take 3 parameters: begin, condition, iteration 
console.log("")
for (let a = 0; a < 3; a++) {
    console.log(a)
}

// Nested Loops:
for (let i = 1; i <= 3; i++) {
    let row = '';
    // Add spaces before the stars
    for (let j = 3 - i; j > 0; j--) {
        row += ' ';
    }
    // Add stars
    for (let k = 1; k <= i * 2 - 1; k++) {
        row += '*';
    }
    console.log(row);
}