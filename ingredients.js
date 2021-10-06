const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients
let b = 0;
while (b <= ingredients.length - 1) {
    console.log(ingredients[b]);
    b++;
}

// Write a for loop that prints out the contents of ingredients:
for (a=0; a<=ingredients.length - 1; a++) {
    console.log(ingredients[a]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
let c = ingredients.length-1
while (c>=0) {
    console.log(ingredients[c]);
    c--;
}
