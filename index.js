//Exercício de Interpretação de Codigo.
//1) 10 and 10, 5
//2) 10, 10, 10
//3) p = hoursPerDay, t = howMuchPerDay

//Exercício escrita de código
//1)
let theName = null
let age = null
console.log (typeof theName, typeof age)
//Object é dado a todas as variáveis sem valores.
theName = prompt("what is your name?")
age = Number (prompt("what is your age"))
console.log (typeof theName, typeof age)
//As duas variáveis serão consideradas "Strings" a menos que o Number seja declarado.
console.log ("hello,", theName, "you are", age, "years old" )

//2) 
const answerOne = prompt("Do you love your familly")
const answerTwo = prompt("Are you in love with me?")
const answerTree = prompt("Do you love the government?")
console.log ("Do you love your familly", answerOne)
console.log ("Are you in love with me?", answerTwo)
console.log ("Do you love the government?", answerTree)

//3) 
let a = 10
let b = 25
let c = null


// Aqui faremos uma lógica para trocar os valores
c = a
a = b
b = c

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

//Desafio
const numberOne = Number(prompt("tell me any number, bro"))
const numberTwo = Number(prompt("now another one"))
console.log("The first number plus the second one results in",numberOne+numberTwo)
console.log("The first number times the second one results in",numberOne*numberTwo)



