// Array:
// - variable that hold values that starting the count as 0

// Create/Declare an array:
const numbers=[1,2,3,4,5,6]
const foods = ["Rice","Burger","Egg","Noodle","Fried Chicken","Cabbage","Chicken"]


// Display items in the array:
// - Count how many items in the array:
console.log(`Total items in the food array: ${foods.length}`)

// - Display each item in the array:
for(let i = 0;i < foods.length;i++){
    let eat = foods[i]
    console.log(i,eat)
}
// - Access items in the array:
//  - First item: 
console.log("The first item: "+foods[0])
//  - Last item:
console.log("The last item: "+foods[foods.length-1])

// - Modify items in the array:
foods[0] = "Bread"
foods.push("Lemon Juice")


foods.forEach(e => {
    console.log(e) 
});
//- Remove items in the array 
console.log(foods.slice(0,2))