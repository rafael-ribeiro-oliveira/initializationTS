"use strict";
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R${product.price}`);
    if (product.isAvailable) {
        console.log("O produto está disponível");
    }
}
const shirt = {
    name: "Camisa",
    price: 19.99,
    isAvailable: true
};
showProductDetails(shirt);
showProductDetails({ name: "Tênis", price: 129.99, isAvailable: false });
function showUserDetails(user) {
    console.log(`O usuário tem o e-mail: ${user.email}`);
    if (user.role) {
        console.log(`A função do usuário é: ${user.role}`);
    }
}
const u1 = { email: "Rafa@gmail.com", role: "Admin" };
const u2 = { email: "Tulio@gmail.com" };
showUserDetails(u1);
showUserDetails(u2);
const fusca = {
    brand: "VW",
    wheels: 4
};
console.log(fusca);
let coords = {
    x: 10
};
coords.y = 15;
console.log(coords);
const rafa = {
    name: "Rafa",
    age: 27
};
console.log(rafa);
const programerHero = {
    name: "ProgramerHero",
    age: 50,
    superpowers: ["telecinese", "mente"]
};
console.log(programerHero);
console.log(programerHero.superpowers[1]);
const arnold = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12
};
console.log(arnold);
console.log(arnold.caliber);
// 7 - readonly array
let myArray = ["Maçã", "Laranja", "Banana"];
// myArray[3] = "Mamão"
console.log(myArray);
myArray.forEach((item) => {
    console.log("Fruta", +item);
});
myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});
console.log(myArray);
// number[]
const myNumberArray = [1, 2, 3, 4, 5];
// const myNumberArray2: fiveNumbers = [1, 2, 3, 4, 5, 6] - Não funciona pois não é permitido aumentar a quantidade de elementos
// const mixedArray: fiveNumbers = [1, true, "teste", 4, 5] - não permite colocar dados diferentes
console.log(myNumberArray);
const anotherUser = ["Rafa", 27];
console.log(anotherUser[0]);
anotherUser[0] = "João"; // - alteração do nome
console.log(anotherUser[0]);
// anotherUser[1] = "teste" - ela só irá funcionar pelos tipos ditados pelas tuplas
// 9 - tuplas com readonly
function showNumbers(numbers) {
    // numbers[0] = 10 - Não permite pois é uma propriedade do readonly
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
