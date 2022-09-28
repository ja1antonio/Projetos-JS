//fucntion contrutora
//function constructor

/* Expressão ''New''
Cria um novo obecjet 
''this'' keyword 
*/

function Person(name, idade) {
  this.name = name;
  this.idade = idade;
}

const mayke = new Person("mayke", 27);
const joao = new Person("João", 20);

console.log(mayke);
console.log(joao);
