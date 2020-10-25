const number1box = document.getElementById("number1") 
const number2box = document.getElementById("number2") 
const number3box = document.getElementById("number3")

var score = 0
var operator, number1, number2, number3

function randomise() {

    number1 = Math.round(Math.random()*100)
    number2 = Math.round(Math.random()*100)

    if(number1>number2) {
        var extra = number1
        number1 = number2
        number2 = extra
    }

    operator = Math.round(Math.random()*4)

    switch(operator){
        case 0:
        case 1: number3 = number1 + number2
        break
        case 2: number3 = number1 - number2
        break
        case 3: number3 = number1 * number2
        break
        case 4: number3 = Math.floor(number1/number2)
        number1 = number2*number3
        break
     }
     
     number1box.innerHTML = number1
     number2box.innerHTML = number2
     number3box.innerHTML = number3

}

const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const mul = document.getElementById("mul")
const divide = document.getElementById("divide")


randomise();
plus.onclick = ()=>{
    if(operator == 1) {
        score++
        randomise()
    }else {
        location.href ="./gameover.html"
    }
}
minus.onclick = ()=>{
    if(operator == 2) {
        score++
        randomise()
    }else {
        location.href ="./gameover.html"
    }
}
mul.onclick = ()=>{
    if(operator == 3) {
        score++
        randomise()
    }else {
        location.href ="./gameover.html"
    }
}
divide.onclick = ()=>{
    if(operator == 4) {
        score++
        randomise()
    }else {
        location.href ="./gameover.html"
    }

}