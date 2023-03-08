let birds = ['Owl', 'Robin', 'Eagle']

console.log(birds)

birds.forEach( function(bird, index) {
    // repeat once for each object in array
    // function will be called for each object in the array
    // prints array entry number and array entry
    console.log(index, bird)
})

// alternate loop
// same result as forEach loop above
for (let x = 0; x < birds.length ; x = x + 1) {
    // prints array entry number and array entry
    console.log(x, birds[x])
}

// while loops exist in javascript but aren't commonly used

let maxVal = 100
let number = 1

while (number < maxVal) {
    number *= 2
    console.log('number = ' + number)
}