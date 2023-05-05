/** Exercicios */

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

function testTrue(val) {
  return val ? console.log('true') : console.log('false');
}

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2; //verdadeiro
console.log('primeiro teste');
console.log(testTrue(expressao));

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Andre"; //verdadeiro
console.log('segundo teste');
console.log(testTrue(nome));


var idade = 28; //verdadeiro
console.log('terceiro teste');
console.log(testTrue(idade));


var possuiDoutorado = false; // false
console.log('quarto teste');
console.log(testTrue(possuiDoutorado));


var empregoFuturo; //false
console.log('quinto teste');
console.log(testTrue(empregoFuturo));


var dinheiroNaConta = 0;
console.log('sexto teste'); //false
console.log(testTrue(dinheiroNaConta));

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207; 


var china = 1340;


if (brasil > china) {
  console.log("população do brasil é maior"); }
   else {
    console.log("população da china é maior");
   }
  



// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}
// verdadeiro


// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão");
} else {
  console.log("Falso");
}

