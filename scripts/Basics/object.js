
// Object: 
// - contains variable and value, just like how we defined variable but without keyword.

// Object method: function can be stored as a property
function shirtPrice(){
    return 10+10
}

const shirt = {size:"XL",
                color:"red",
                material:"cotton",
                price:shirtPrice(),
                creator:function() {
                    console.log("Designed by Mr.Wayne with " + this.material);
                }
            }
console.log("Retrieve shirt object color:"+shirt.color+" "+shirt["color"])
console.log("Retrieve shirt object size:"+shirt.size+" "+shirt["size"])
console.log("Retrieve shirt object cotton:"+shirt.cotton+" "+shirt["cotton"])
console.log("Retrieve shirt object price:"+shirt.price+" "+shirt["price"])
shirt.creator()

// Add new property
shirt.description = "This is a good shirt";
// Edit existing property
shirt.size = "L"

// Display objects after modification (add, edit)
console.log("")
for(let i in shirt){
    console.log(i+":"+shirt[i])
}
