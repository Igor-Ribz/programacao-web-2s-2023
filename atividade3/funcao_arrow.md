# Arrow function

### As "Arrow Functions", são uma característica introduzida no ECMAScript 6 (ES6) que fornece uma sintaxe mais curta e concisa para definir funções em JavaScript. Elas são uma alternativa às funções  tradicionais e oferecem as seguintes funcionalidades:

## Sintaxe Concisa:
### Arrow functions permitem escrever funções de forma mais compacta, economizando a necessidade de escrever a palavra-chave function e usar chaves {} para um único statement. 

## Exemplo em código: 

// Função tradicional:
function soma(a, b) {
  return a + b;
}

// Arrow function equivalente
const soma = (a, b) => a + b;

const pessoa = {
  nome: "Alice",
  dizerOla: function() {
    setTimeout(function() {
      console.log(`Olá, ${this.nome}`); // Isso não funcionará como esperado
    }, 1000);
  }
};

//  Uma das características mais importantes das arrow functions é que elas capturam o valor do this no momento em que são
// definidas, em vez de criarem seu próprio contexto de this.
// Isso pode ser útil em casos de uso que envolvem manipulação de objetos e funções callback.

pessoa.dizerOla(); // Irá imprimir "Olá, undefined"

// Com arrow function
const pessoa2 = {
  nome: "Bob",
  dizerOla: function() {
    setTimeout(() => {
      console.log(`Olá, ${this.nome}`); // Funciona corretamente
    }, 1000);
  }
};

pessoa2.dizerOla(); // Irá imprimir "Olá, Bob"

//Arrow functions não têm seu próprio objeto arguments. Elas herdam o objeto arguments do escopo pai.
//exemplo: 

function exemplo() {
  const arrowFn = () => {
    console.log(arguments); // Isso irá se referir aos argumentos de 'exemplo'
  };
  arrowFn();
}

exemplo(1, 2, 3); // Irá imprimir os argumentos passados para 'exemplo'



