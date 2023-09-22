// 1 - arrays
let numbers: number[] = [1, 2, 3]

numbers.push(5)

console.log(numbers[2])

// numbers = "teste"

const nomes: string[] = ["Matheus", "João"]

// nomes.push(4) INVALID

// 2 - Outra sintaxe array 
const nums: Array<number> = [100, 200]

nums.push(300)

console.log(nums)

//nms.push("teste") INVALID

console.log(nums[0]) 

// 3 - any (evitar ao máximo de utilizar) pois pode dar alguns problemas

const arr1: any = [1, "teste", true, [], {nome: "Matheus"}]

console.log(arr1)

arr1.push([1, 2, 3])

console.log(arr1)

// 4 - Parametros tipados

function soma(a: number, b: number) {
    console.log(a + b)
}

soma(4, 5)

// soma("a", "b") NÃO FUNCIONA

// 5 - Retorno de função
function greeting(name: string): string {
    return `Olá ${name}`
}

console.log(greeting("Rafa"))

// 6 - Função anonima
setTimeout(function() {
    const sallary: number = 1000
    
   // console.log(parseFloat(sallary))

   // console.log(sallary)
}, 2000)

// 7 - Tipos de objeto
function passCoordinates(coord: {x: number, y: number}) {
    console.log("X coordinates" + coord.x)
    console.log("Y coordinates" + coord.y)
}

const objCoord = {x: 329, y: 84.2}

passCoordinates(objCoord)
// nÃO ESTÁ CORRETO ->passcoordinates({nome: 1, sobrenome: 2}) 

const pessoaObj:{nome: string, surname: string} = {nome: "Rafa", surname: "Oliveira"}

// 8 - Props opcionais
function showNumbers(a: number, b: number, c?: number) {
    console.log("A: " + a)
    console.log("B: " + b)
    // console.log("C: " + c)
    if(c) {
        console.log("C: " + c) 
    }
}
//  sinal de opcional -> ?
showNumbers(1, 2, 3)
showNumbers(4, 5)
// showNumbers(6)

// 9 - Validando argumento opcional
function advancedGreeting(firstName: string, lastName?: string) {

    if(lastName !== undefined) {
        return `Olá, ${firstName} ${lastName}, tudo bem?`
    }
    return `Olá, ${firstName}, tudo bem?`
}

console.log(advancedGreeting("Rafa", "Oliveira"))
console.log(advancedGreeting("Tulio"))

// 10 - Union type
function showBalance(balance: string | number){
    console.log(`O saldo da conta é R$${balance}`)
}

showBalance(100)
showBalance("500")
// NÃO FUNCIONA -> showBalance(true)

const arr2: Array<Number | string | boolean> = [1, "teste", true]

// 11 - Avancando em union types
function showUserRole(role: boolean | string) {
    if(typeof role === "boolean") {
        return "Usuario não aprovado"
    }

    return `A função do usuário é: ${role}`
}

console.log(showUserRole(false))
console.log(showUserRole("Admin"))

// 12 - Type alias
type ID = string | number

function showId(id: ID) {
    console.log(`O ID é: ${id}`)
}

showId(1)
showId("200")
showId(123)

// 13 - interface
interface Point {
    x: number
    y: number
    z: number
}

function showCoords(obj: Point) {
    console.log(`x: ${obj.x} y: ${obj.y} z: ${obj.z}`)
}

const coordObj:Point = {
    x: 10,
    y: 15,
    z: 20
}

showCoords(coordObj)

// 14- interface(mais usada) x type alias

interface Person {
    name: string
}

interface Person {
    age: number
}

const somePerson: Person = {name: "Rafa", age: 30}

console.log(somePerson)

type personType = {
    name: string
}

// Desta forma entra como erro
// type personType = {
//    age: number
//}

// 15 - literal types
let test: "testando"

test = "testando"

console.log(test)

function showDirection(direction: "left" | "right" | "center") {
    console.log(`A direção é ${direction}`)
}

showDirection("left")

// showDirection("top")

// 16 - non null asserion operators
const p = document.getElementById("some-p")

console.log(p!.innerText)

// 17 - bigint
let n: bigint

// n = 1

n = 1000n

console.log(typeof n)

console.log(n + 1000n)

// 18 - symbol
let symbolA:symbol = Symbol("a")
let symbolB = Symbol("a")

console.log(symbolA == symbolB)  // false
console.log(symbolA === symbolB)  //false


