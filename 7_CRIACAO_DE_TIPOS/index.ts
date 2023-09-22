// 1 - grnerics
function showData<T>(arg: T): string {
    return `o dado é: ${arg}`
}

console.log((5))
console.log(("testando generic"))
console.log((true))
console.log((["teste"])) // aceita qualquer tipo convertendo para string que é a saída escolhida

// 2 - constraint em generic
function showProductName<T extends {name: string}>(obj: T) {
    return `O nome do produto é: ${obj.name}`
}

const myObj = {name: "Porta", cor: "Azul"}
const otherProduct = {name: "Carro", wheels: 4, engine: 1.5}
const thirdObj = {price: 19.88, category: "Roupa"}

console.log(showProductName(myObj))
console.log(showProductName(otherProduct))
// console.log(showProductName(thirdObj)) - não funciona pois só preenche um tipo de requisito precisaria da prop name

// 3 - generics com interface
interface MyObject<T, U, Q> {
    name: string
    wheels: T
    engine: U
    color: Q
}

type Car = MyObject<number, number, string>
type Pen = MyObject<boolean, boolean, string>

const myCar:Car = {name: "Fusca", wheels: 4, engine: 1.0, color: "Azul"}
const myPen:Pen = {name: "Caneta BIC", wheels: false, engine: false, color: "Roxo"}

console.log(myCar)
console.log(myPen)

// 4 - type parameters
function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
    return `A chave está presente no objeto e tem o valor de ${obj[key]}`
}

const server = {
    hd: '2TB',
    ram: '32GB'
}

console.log(getSomeKey(server, 'ram'))
// console.log(getSomeKey(server, "teste")) somente o que está dentro da chave que é possível utilizar

// 5 - keyof type operator
type Character = {name: string, age: number, hasDriverLicense: boolean}

type C = keyof Character

function showCharName(obj: Character, name: C): string {
    return `${obj[name]}`
}

const myChar: Character = {
    name: "Rafa",
    age: 27,
    hasDriverLicense: true
}

console.log(showCharName(myChar, 'name'))
console.log(showCharName(myChar, 'age'))
// console.log(showCharName("teste", asd)) - não funciona

// 6 - typeof type operator
const userName: string = "Rafa"

const userName2: typeof userName = "João"

// const userName2: typeof userName = 14 não é string

type x = typeof userName

const userName4: x = "Aline"

// 7 - indexed access type
type Truck = {km: number, kg: number, description: string}

type Km = Truck['km']

const newTruck: Truck = {
    km: 10000,
    kg: 5000,
    description: "Caminhão para pouca carga"
}

function showKm(km: Km) {
    console.log(`O veículo tem o km de: ${km}`)
}

showKm(newTruck.km)

const newCar = {
    km: 5000,
    kg: 1650
}

showKm(newCar.km)

// 8 - conditional type
interface A {}

interface B extends A {}

interface Teste {
    showName(): string
}

type myType = B extends A ? number : string

const someVar:myType = 5
// const someVar2:myType = "teste" não funciona

type myTypeB = Teste extends {showNumber(): number } ? string : boolean

// 9 - template literais type
type testA = "text"

type CustomType =  `some ${testA}`

const testing: CustomType = "some text"
// const testing2: CustomType = "Some text 2" - não funciona

type a1 = "Testando"
type a2 = "Union"

type a3 = `${a1}` | `${a2}`

