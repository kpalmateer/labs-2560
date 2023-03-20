let animals = ['Giraffe', 'Elephant', 'Yak']

animals.forEach( function (animal, index) {
    console.log(animal, index)
})

// you can use the arrow notation to be a little more concise
animals.forEach( (animal, index) => {
    console.log(animal, index)
})

// if you only have a single line of code in the function, you can omit curly braces
animals.forEach( (animal, index) => console.log(animal, index))

// if you only need the data, you can further simplify
animals.forEach( function (animal) {
    console.log(animal)
})

// the arrow notation
animals.forEach( (animal) => {
    console.log(animal)
})

// the simplified arrow notation can eliminate parentheses if only a single argument is passed to the function
animals.forEach( animal => console.log(animal))