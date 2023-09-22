"use strict";
// 1 - grnerics
function showData(arg) {
    return `o dado é: ${arg}`;
}
console.log((5));
console.log(("testando generic"));
console.log((true));
console.log((["teste"])); // aceita qualquer tipo convertendo para string que é a saída escolhida
// 2 - constraint em generic
function showProductName(obj) {
    return `O nome do produto é: ${obj.name}`;
}
const myObj = { name: "Porta", cor: "Azul" };
const otherProduct = { name: "Carro", wheels: 4, engine: 1.5 };
const thirdObj = { price: 19.88, category: "Roupa" };
console.log(showProductName(myObj));
console.log(showProductName(otherProduct));
const myCar = { name: "Fusca", wheels: 4, engine: 1.0, color: "Azul" };
const myPen = { name: "Caneta BIC", wheels: false, engine: false, color: "Roxo" };
console.log(myCar);
console.log(myPen);
// 4 - type parameters
function getSomeKey(obj, key) {
    return `A chave está presente no objeto e tem o valor de ${obj[key]}`;
}
const server = {
    hd: '2TB',
    ram: '32GB'
};
console.log(getSomeKey(server, 'ram'));
function showCharName(obj, name) {
    return `${obj[name]}`;
}
const myChar = {
    name: "Rafa",
    age: 27,
    hasDriverLicense: true
};
console.log(showCharName(myChar, 'name'));
console.log(showCharName(myChar, 'age'));
// console.log(showCharName("teste", asd)) - não funciona
// 6 - typeof type operator
const userName = "Rafa";
const userName2 = "João";
const userName4 = "Aline";
const newTruck = {
    km: 10000,
    kg: 5000,
    description: "Caminhão para pouca carga"
};
function showKm(km) {
    console.log(`O veículo tem o km de: ${km}`);
}
showKm(newTruck.km);
const newCar = {
    km: 5000,
    kg: 1650
};
showKm(newCar.km);
const someVar = 5;
const testing = "some text";
