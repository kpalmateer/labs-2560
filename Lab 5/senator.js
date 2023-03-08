let age = 35
let usCitizenTime = 35
let stateOfResidence = 'Minnesota'
let stateWantToRepresent = 'Minnesota'

// type coercion is OK in this example
if (age >= 30 && usCitizenTime >= 9 && stateOfResidence == stateWantToRepresent) {
    console.log('You can be a senator')
} else {
    console.log('You do not qualify')
}

// in this example, it will cause issues
// undefined, false, null, 0 and empty lists are all considered false
// type coercion here would return the wrong result, so use === instead to eliminate coercion
if (false === 0) {
    console.log('the same!')
} else {
    console.log('not the same!')
}