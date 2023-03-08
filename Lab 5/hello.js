console.log('Hello World!')

// three ways to create variables

// let has a fairly narrow scope
let color = 'blue'

// var has a broad scope and isn't recommended
var size = 'medium'

// a const value can't be changed
const language = 'JavaScript'

// these are both number types
let quantity = 5
let distance = 4.5

// strings can use single or double quotes
let text = 'Hello World'
let message = "Hello World"

console.log('There are ' + quantity + ' programmers.')

// print a message w/ today's temp
let todayTemp = 75

console.log('Today\'s temp is ' + todayTemp + ' degrees F')

let tempC = (todayTemp - 32) * 5 / 9
console.log('Today\'s temp in C is ' + tempC.toFixed(2))

// using template string
console.log(`Today's temperature is ${tempC.toFixed(2)}C which is ${todayTemp}F.`)

// use a template string to print a message

let className = 'Web Programming'
let classCode = 2560
let department = 'ITEC'

console.log(`This class is ${department} ${classCode} ${className}`)