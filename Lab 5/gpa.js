function isGPA(gpa) {
    if (gpa >= 0 && gpa <= 4) {
        return true
    } else {
        return false
    }
}

console.log(isGPA(4))
console.log(isGPA(0))
console.log(isGPA(3))
console.log(isGPA(5))
console.log(isGPA(-1))