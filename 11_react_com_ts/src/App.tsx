import React, {createContext} from 'react';
import logo from './logo.svg';
import './App.css';

// 4 - impotação de componentes
import FirstComponent from "./components/FirstComponent";

//5 - destruturando props
import SecondComponent from "./components/SecondComponent";
import Destructuring, { Category } from './components/Destructuring';

//6 useState
import State from "./components/State";

// 10 - Utilizando context
import Context from './components/Context';

//8 - type
type textOrNull = string | null

type fixed = "Isso" | "Ou" | "Aquilo";

//9 - context
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
  //1 - variáveis 
  const name: string = "Rafa";
  const age: number = 29;
  const isWorking: boolean = false;

  //2 - funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`;
  }

  //8 - type
  const myText:textOrNull = "O texto de tipo aparecerá aqui";
  let mySecondText: textOrNull = null;

//  mySecondText = "opa";

const testandoFixed:fixed = "Isso";

//9 - context
const contextValue: IAppContext = {
  language: "JavaScript",
  framework: "Express",
  projects: 5,
};

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>TypeScript com React</h1>
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        {isWorking && (
          <div>
            <p>Trabalhando</p>
          </div>
        )}

        <h3>{userGreeting(name)}</h3>
        <FirstComponent />
        <SecondComponent name="Rafa 2" />
        <Destructuring 
          title="Primeiro post" 
          content="Algum conteúdo" 
          commentsQty={10}
          tags={["ts", "js"]}
          category={Category.TS}
        />
        <Destructuring 
          title="Segundo post" 
          content="Mais outro conteúdo" 
          commentsQty={5}
          tags={["python"]}
          category={Category.P}

        />
        <State />
        {myText && <p>Tem texto na variável</p>}
        {mySecondText && <p>Tem texto na variável</p>}
        <Context />
      </div>
    </AppContext.Provider>
  );
}

export default App;
