let text = 'hello world'

let stringLength = text.length // length is a property of a string

let shout = text.toUpperCase() // convert text to uppercase

let whisper = text.toLowerCase() // convert text to lowercase

let whereIsW = text.indexOf('w') // find the position of W in the string or -1 if not found

let whereIsZ = text.indexOf('z') // find the position of Z in the string or -1 if not found

let whisperAndShout = whisper.concat(shout) // combine strings

let replaceO = text.replace('o', '0') // replace the first instance of the first value with second value

let replaceAllO = text.replace(/o/g, '0') // replace all instances of first value with second value
                                                                 // this is a form of regular expression

let removeWhiteSpace = text.trim() // remove leading and trailing spaces

console.log(stringLength, shout, whisper, whereIsW, whereIsZ, whisperAndShout, replaceO, replaceAllO,removeWhiteSpace)

// more regular expression examples

let classText = 'The classes are itec 1150, itec 1250, itec 2560'

let replaced = text.replace('itec', 'ITEC')
console.log(replaced)

let replacedAll = text.replace(/itec/g, 'ITEC')
console.log(replacedAll)

let message = 'The classes are 1150, 1250, 2560'

// \d means match any digit, {4} means do that 4 times, /g makes it a global regex (which will match each occurrence)
let replaceRegex = message.replace(/\d{4}/g, 'ITEC $&')
console.log(replaceRegex)