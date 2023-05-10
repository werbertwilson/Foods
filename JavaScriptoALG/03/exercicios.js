// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

var informacoes = {
  primeiroNome: "werbert",
  segundoNome: "wilson",
  mostraNome: function (mostrarNome) {
    console.log(
      `seu nome completo é ${this.primeiroNome + " " + this.segundoNome}`
    );
  },
};

// Crie um método no objeto anterior, que mostre o seu nome completo
informacoes.mostraNome();
informacoes.mostranome = function () {
  return `${this.primeiroNome} ${this.segundoNome}`;
};

console.log(informacoes.mostranome());

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var pessoa = "pessoa";
var doguinho = {
  nome: this.nome,
  raca: this.raca,
  cor: this.cor,
  idade: this.idade,
  latir: function latir(pessoa) {
    if (pessoa == "homem") {
      return "au au!";
    } else {
      return "continuou vigiando";
    }
  },
};

doguinho.nome = "dudu";
doguinho.raca = "Labrador";
doguinho.idade = "10 anos";

console.log(
  `o doquinho ${doguinho.nome} é um ${doguinho.raca} de ${
    doguinho.idade
  } muito brabo, e sempre que ele vê um homem, ele... ${doguinho.latir(
    "homem"
  )}`
);
