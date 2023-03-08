// create an object which contains properties
let user = {username: 'Kyle', password: 'everest'}

console.log(user.username + ' ' + user.password)
console.log(user['username'])


// square bracket notation is required if you're referencing a variable as the property name
let whatProperty = 'password'
console.log(user[whatProperty])

// JSON - JavaScript Object Notation
// values can be anything
// names must be strings

user.password = 'kilimanjaro'
console.log(user)

user['password'] = 'aconcagua'
console.log(user)

user.email = 'kyle@mountainman.org'
console.log(user)

// objects can contain arrays and even other objects
let newUser = {
    name: 'Kyle',
    password: 'denali',
    email: 'kyle@mountainman.org',
    // an array within an object
    roles: ['user', 'admin'],
    // an object within an object
    contact: {
        phone: '123-456-7890',
        office: 'PeakView',
    },
}

// add property to the newUser object
newUser.salary = 100000

// add item to array
newUser.roles.push('server admin')

// add property to the nested contact object
newUser.contact.location = 'Alpine Zone'

// access the 'roles' array
console.log(newUser.roles[0])

// access the contact object
console.log(newUser.contact.office)

console.log(newUser)

// you can use a 'for in' loop to loop over an object
for (let name in newUser) {                // name is the property names
    console.log(name, newUser[name])       //
}