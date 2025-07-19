// 1 - numbers
let x: number = 10

console.log(x)

x = 16

console.log(typeof x)

const y:number = 1518.165

console.log(typeof y)

console.log(y)

console.log(y.toPrecision(3))

// 2 - string
const firstName: string = "Rafa"

console.log(firstName.toUpperCase())

let fullName: string

const lastName: string = "Oliveira"

fullName = firstName + " " + lastName

console.log(fullName)

console.log(typeof fullName)

// 3 - boolean
let a: boolean = false

console.log(a)
console.log(typeof a)

a = true

console.log(a)

// 4 - inference e annotation
let ann: string = "Teste"

let inf = "Teste"

// ann = 1
// inf = 1

console.log("Testando 2")

// 5 - desafio
const n1: number = 10

const numberToString = n1.toString()

const printMyNumber: string = `Eu vou imprimir o número ${numberToString}`

console.log(printMyNumber)