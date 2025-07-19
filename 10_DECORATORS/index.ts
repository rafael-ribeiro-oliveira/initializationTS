//1 - exemplo decorator
function myDecorator() {
    console.log("Iniciando decorator!");

    return function(target: any, propertKey: string, descriptor: PropertyDescriptor) {

        console.log("Executando com sucesso o decorator");
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    };
}

class myClass {
    name!: string;
    
    @myDecorator()
    testing() {
        console.log("terminando a execução do método");
    }
}

const myObj = new myClass();

myObj.testing();

// 2 - multiplos decorators
function a() {
    return function(
    target: any, 
    propertKey: string,
    descriptor: PropertyDescriptor
    ) {
    console.log("execute a.")

    };
}

function b() {
    return function(
    target: any, 
    propertKey: string,
    descriptor: PropertyDescriptor
    ) {
    console.log("execute b.")

    };
}

function c() {
    return function(
    target: any, 
    propertKey: string,
    descriptor: PropertyDescriptor
    ) {
    console.log("execute c.")

    };
}
//O mais próximo da função será executado primeiro, no caso de baixo para cima
class MultipleDecorators {
    @c()
    @a()
    @b()
    testing() {
        console.log("Terminando de executar")
    }
}

const multiple = new MultipleDecorators();

multiple.testing();

//3 - class decorator
function classDec(constructor: Function) {
    console.log(constructor.name);
    if(constructor.name === "User") {
        console.log("Criando usuário");
    }
}

@classDec
class User {
    name

    constructor(name: string) {
        this.name = name
    }
}

const rafa = new User("Rafa");

console.log(rafa);

//4 - Decorator de método
function enumerable(value: boolean) {
    return function (
            target: any, 
            propertKey: string, 
            descriptor: PropertyDescriptor
    ) { 
        descriptor.enumerable = value;
    }
}

class Machine {
    name

    constructor(name: string) {
        this.name = name;
    }

    // false deixa a classe invisivel e true disponível
    @enumerable(false)
    showName() {
        console.log(this);
        return `O nome da máquina é: ${this.name}`

    }
}

const trator = new Machine("Trator");

console.log(trator.showName());

//5 - Acessor decorator
class Monster {
    name?
    age?

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;

    }
    @enumerable(true)
    get showName() {
        return `Nome do monstro: ${this.name}`;
    }
    @enumerable(false)
    get showAge() {
        return `Idade do monstro: ${this.age}`;
    }
}

const noturno = new Monster("noturno", 20);

console.log(noturno);

//6 - property decorator
// 1 - 00001
function formatNumber() {
    return function(target: object, propertyKey: string) {

        let value: string
        
        const getter = function() {
            return value
        }

        const setter = function(newVal: string) {
            value = newVal.padStart(5, "0")
        }

        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter,

        });
    }
}

class ID {
    @formatNumber()
    id

    constructor(id: string) {
        this.id = id;
    }
}

const newItem = new ID("1");

console.log(newItem);

console.log(newItem.id);

//7 - exemplo real com class decorator
function createdDate(created: Function) {
    created.prototype.createdAt = new Date();
}

@createdDate
class Book {
    id;
    createdAt?: Date;

    constructor(id: number) {
       this.id = id; 
       
    }
}

@createdDate
class Pen {
    id;

    constructor(id: number) {
       this.id = id;
    }
}

const newBook = new Book(12);
const pen = new Pen(55);

console.log(Book);
console.log(Pen);

console.log(newBook.createdAt);

//8 - exemplo real - Method Decorator
function checkIfUserPosted() {
    return function(
        target: Object, 
        key: string | Symbol, 
        descriptor: PropertyDescriptor
    ) {

// Aqui ele permite apenas um post, caso tente postar mais ele irá aparecer a mensagem que já foi postado
        const childFunction = descriptor.value;
        console.log(childFunction);
        descriptor.value = function(... args: any[]) {
            if(args[1] === true) {
                console.log("Usuário já postou!")
                return null
            } else {
                return childFunction.apply(this, args)

            }
        }

        return descriptor
    }
}

class Post {
    alreadyPosted = false

    @checkIfUserPosted()
    post(content: string, alreadPosted: boolean ) {
        this.alreadyPosted = true
        console.log(`Post do usuário: ${content}` );

    }
}
        const newPost = new Post();        

        newPost.post("Meu primeiro post!", newPost.alreadyPosted);

        newPost.post("Meu segundo post!", newPost.alreadyPosted);

        newPost.post("Meu terceiro post!", newPost.alreadyPosted);

//9 - exemplo real - property decorator
function Max(limit: number) {
    
    return function(target: Object, propertyKey: string) {

        let value:string
        
        const getter = function() {
            return value
        }

        const setter = function(newVal: string) {
            if(newVal.length > limit) {
                console.log(`O valor deve ser no máximo ${limit} digitos.`)
                return
            } else {
                value = newVal
            }
        }

        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
        });
    }
}

class Admin {
    @Max(10)
    userName;

    constructor(userName: string) {
        this.userName = userName
    }
}

let pedro = new Admin("pedro1345efewfw");
let Jean = new Admin("Jean");

console.log(Jean);