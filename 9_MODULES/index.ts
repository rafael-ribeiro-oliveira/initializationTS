// 1 - importação de arquivos
import importGreet from "./greet.js";

importGreet();

//2 - import de variável
import { x } from "./variable";

console.log(x);

// 3 - Múltiplas importações
import {a, b, myFunction} from "./multiple";

console.log(a);
console.log(b);

myFunction();

//4 - Alias para importações
// O 'as' é alias.
import { someNome as name } from "./changename";

console.log(name);

//5 - Importando tudo
import * as myNumbers from "./numbers";

console.log(myNumbers);

const nX = myNumbers.n1;

console.log(nX);

myNumbers.showNumbers();

//6 - importando tipos
import { Human } from './mytype'

class user implements Human {
    name;
    age;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const Rafa = new user("Rafa", 29);

console.log(Rafa);
console.log(29);