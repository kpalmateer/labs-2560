let canvas = document.querySelector('#canvas')
let context = canvas.getContext('2d')

let teesh = document.querySelector('#teesh-text')
let moo = document.querySelector('#moo-text')
teesh.disabled = true
moo.disabled = true

let image = new Image()
image.src = 'watch.jpg'

image.addEventListener('load', function () {
    context.drawImage(image, 0, 0)
    teesh.disabled = false
    moo.disabled = false
})

teesh.addEventListener('input', function (){
    let text = this.value
    context.fillStyle = 'black'
    context.font = '40px Futura'
    // context.drawImage(image, 0, 0)
    context.fillText(text, 50, 200)
})

moo.addEventListener('input', function () {
    let text = this.value
    context.fillStyle = 'black'
    context.font = '40px Courier'
    // context.drawImage(image, 0, 0)
    context.fillText(text, 400, 200)
})