// 1 - arrays
var numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers[2]);
// numbers = "teste"
var nomes = ["Matheus", "João"];
// nomes.push(4) INVALID
// 2 - Outra sintaxe array 
var nums = [100, 200];
nums.push(300);
console.log(nums);
//nms.push("teste") INVALID
console.log(nums[0]);
// 3 - any (evitar ao máximo de utilizar) pois pode dar alguns problemas
var arr1 = [1, "teste", true, [], { nome: "Matheus" }];
console.log(arr1);
arr1.push([1, 2, 3]);
console.log(arr1);
// 4 - Parametros tipados
function soma(a, b) {
    console.log(a + b);
}
soma(4, 5);
// soma("a", "b") NÃO FUNCIONA
// 5 - Retorno de função
function greeting(name) {
    return "Ol\u00E1 ".concat(name);
}
console.log(greeting("Rafa"));
// 6 - Função anonima
setTimeout(function () {
    var sallary = 1000;
    // console.log(parseFloat(sallary))
    // console.log(sallary)
}, 2000);
// 7 - Tipos de objeto
function passCoordinates(coord) {
    console.log("X coordinates" + coord.x);
    console.log("Y coordinates" + coord.y);
}
var objCoord = { x: 329, y: 84.2 };
passCoordinates(objCoord);
// nÃO ESTÁ CORRETO ->passcoordinates({nome: 1, sobrenome: 2}) 
var pessoaObj = { nome: "Rafa", surname: "Oliveira" };
// 8 - Props opcionais
function showNumbers(a, b, c) {
    console.log("A: " + a);
    console.log("B: " + b);
    // console.log("C: " + c)
    if (c) {
        console.log("C: " + c);
    }
}
//  sinal de opcional -> ?
showNumbers(1, 2, 3);
showNumbers(4, 5);
// showNumbers(6)
// 9 - Validando argumento opcional
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return "Ol\u00E1, ".concat(firstName, " ").concat(lastName, ", tudo bem?");
    }
    return "Ol\u00E1, ".concat(firstName, ", tudo bem?");
}
console.log(advancedGreeting("Rafa", "Oliveira"));
console.log(advancedGreeting("Tulio"));
// 10 - Union type
function showBalance(balance) {
    console.log("O saldo da conta \u00E9 R$".concat(balance));
}
showBalance(100);
showBalance("500");
// NÃO FUNCIONA -> showBalance(true)
var arr2 = [1, "teste", true];
// 11 - Avancando em union types
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuario não aprovado";
    }
    return "A fun\u00E7\u00E3o do usu\u00E1rio \u00E9: ".concat(role);
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
function showId(id) {
    console.log("O ID \u00E9: ".concat(id));
}
showId(1);
showId("200");
showId(123);
function showCoords(obj) {
    console.log("x: ".concat(obj.x, " y: ").concat(obj.y, " z: ").concat(obj.z));
}
var coordObj = {
    x: 10,
    y: 15,
    z: 20
};
showCoords(coordObj);
var somePerson = { name: "Rafa", age: 30 };
console.log(somePerson);
// Desta forma entra como erro
// type personType = {
//    age: number
//}
// 15 - literal types
var test;
test = "testando";
console.log(test);
function showDirection(direction) {
    console.log("A dire\u00E7\u00E3o \u00E9 ".concat(direction));
}
showDirection("left");
// showDirection("top")
// 16 - non null asserion operators
var p = document.getElementById("some-p");
console.log(p.innerText);
// 17 - bigint
// let n: bigint
// n = 1
// n = 1000n
// console.log(typeof n)
// console.log(n + 1000n)
// 18 - symbol
var symbolA = Symbol("a");
var symbolB = Symbol("a");
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
