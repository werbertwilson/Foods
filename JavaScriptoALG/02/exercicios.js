// Crie uma função para verificar se um valor é Truthy
function istruthy(dado) {
  return !!dado;
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado) {
  return lado * 4;
}

perimetroQuadrado(5);
console.log(perimetroQuadrado(5));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  nome = "Werbert WIlson";
  sobrenome = " Severiano chaves da conceição";
  console.log(nome, sobrenome);
}

nomeCompleto();

// Crie uma função que verifica se um número é par

function epar(valor) {
  var modulo = valor % 2;
  if (modulo === 0) {
    console.log("Numero par");
  } else {
    console.log("Número impar");
  }
}

epar(10);
console.log(epar(13));
console.log(epar(10));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDado(tipo) {
  return typeof tipo;
}

console.log(tipoDado(0));
console.log(tipoDado("werbert"));
console.log(tipoDado(nomeCompleto));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener("click", function () {
  console.log("André Rafael");
});

// Corrija o erro abaixo

var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises} - ${paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);

console.log("5 & 1:", 5 & 1);
console.log("5 | 1:", 5 | 1);
console.log("5 | 1:", 5 | 1);
console.log("5^1", 5 ^ 1);
console.log("5^2", 5 ^ 2);
console.log("5^3", 5 ^ 3);

console.log("packt" ? true : false);
console.log("packet" == true);

for (var i = 0; i < 10; i++) {
  console.log(i);
}
