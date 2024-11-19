console.log(8 >= 7);
let nome = "Leonado";
console.log(nome);
console.log(typeof nome);
// const nun = prompt('digite um numero')
// console.log (nun)
let numero = 4;
if (numero > 3) {
  console.log("É maior");
} else {
  console.log("menor");
}
let i = 0;
for (i = 0; i < 10; i++) {
  console.log(`repetindo ${i}`);
}
function minhaFuncao(btn) {
  console.log(`${btn}`);
}
minhaFuncao("leonado lopes");

const arrays = [1, 2, 3, 4, 5, 6];
arrays.push(7, 8, 9); //adciona elemento no final do arrays
// arrays.pop(7)//remove elemento no final do meu arrays
arrays.unshift(0); //adciona elemento no começo do meu arrays
console.log(arrays);
console.log(` Meu Arrays tem ${arrays.length} propriedades`);

for (let i = 0; i < arrays.length; i++) {
  console.log(`lista de numeros do meu arrays ${arrays[i]}`);
}

const person = {
  nome: "leonado",
  job: "programador",
  age: 32,
};
console.log(person.nome);
person.sobreNome = "lopes fernandes";
console.log(person);

//método de arrays foreach

const nums = [1, 2, 3, 4, 5];
nums.forEach((numer) => {
  console.log(`o numero é ${numer}`);
});
// debugger;

console.log(document.body);
//criando um novo elemento.
const h = document.querySelector("body");
const h2 = document.createElement("h2");
h.appendChild(h2);
h2.textContent = "leonado lopes ";
//acessando atributos
const links = document.querySelector("a");
console.log(links);
links.setAttribute("href", "https://www.google.com.br");
links.setAttribute("target", "-blenk");

//evento de foco no meu input

const input = document.querySelector("#my-input");
input.addEventListener("focus", (e) => {
  console.log("entrou no input");
});
