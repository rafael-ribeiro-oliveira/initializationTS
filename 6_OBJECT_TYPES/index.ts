// 1 - tipo de objetos para função com interface
interface Product {
    name: string
    price: number
    isAvailable: boolean
}

function showProductDetails(product: Product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R${product.price}`)
    if(product.isAvailable) {
        console.log("O produto está disponível")
    }
}

const shirt:Product = {
    name: "Camisa",
    price: 19.99,
    isAvailable: true
}

showProductDetails(shirt)
showProductDetails({name: "Tênis", price: 129.99, isAvailable: false})

// 2 - propriedade opcional em interface
interface User {
    email: string,
    role?: string,
}

function showUserDetails(user: User) {
    console.log(`O usuário tem o e-mail: ${user.email}`)

    if(user.role) {
        console.log(`A função do usuário é: ${user.role}`)
    }
}

const u1:User = {email: "Rafa@gmail.com", role: "Admin"}
const u2:User = {email: "Tulio@gmail.com"}

showUserDetails(u1)
showUserDetails(u2)

// 3 - readonly
interface Car {
    brand: string
    readonly wheels: number
}

const fusca:Car = {
    brand: "VW",
    wheels: 4
}

console.log(fusca)

// fusca.wheels - 5 - NÃO FUNCIONA

// 4 - index singnature
interface CoordObject {
    [index: string]: number
}

let coords: CoordObject = {
    x: 10 
}

coords.y = 15

console.log(coords)

// coords.z = "teste" - NÃO FUNCIONA

// 5 - extending interface
interface Human {
    name: string
    age: number
}

interface SuperHuman extends Human {
    superpowers: string[]
}

const rafa: Human = {
    name: "Rafa",
    age: 27
}

console.log(rafa)

const programerHero: SuperHuman = {
    name: "ProgramerHero",
    age: 50,
    superpowers: ["telecinese", "mente"]
}

console.log(programerHero)

console.log(programerHero.superpowers[1])

// 6 - intersection types
interface Character {
    name: string
}

interface Gun {
    type: string
    caliber: number
}

type HumanWithGun = Character & Gun

const arnold: HumanWithGun = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12
}

console.log(arnold)

console.log(arnold.caliber)

// 7 - readonly array
let myArray: ReadonlyArray<string> = ["Maçã", "Laranja", "Banana"]

// myArray[3] = "Mamão"

console.log(myArray)

myArray.forEach((item) => {
    console.log("Fruta", + item)
})

myArray = myArray.map((item) => {
    return `Fruta: ${item}`
})

console.log(myArray)

// myArray[0] = "teste" - NÃO FUNCIONA POIS ARRAY É SOMENTE LEITURA

// 8 - tuplas
type fiveNumbers = [number, number, number, number, number]

// number[]

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5]
// const myNumberArray2: fiveNumbers = [1, 2, 3, 4, 5, 6] - Não funciona pois não é permitido aumentar a quantidade de elementos
// const mixedArray: fiveNumbers = [1, true, "teste", 4, 5] - não permite colocar dados diferentes

console.log(myNumberArray)

type nameAndAge = [string, number]

const anotherUser:nameAndAge = ["Rafa", 27]

console.log(anotherUser[0])

anotherUser[0] = "João" // - alteração do nome

console.log(anotherUser[0])

// anotherUser[1] = "teste" - ela só irá funcionar pelos tipos ditados pelas tuplas

// 9 - tuplas com readonly
function showNumbers(numbers: readonly [number, number]) {
   // numbers[0] = 10 - Não permite pois é uma propriedade do readonly
    console.log(numbers[0])
    console.log(numbers[1])
}

showNumbers([1, 2])