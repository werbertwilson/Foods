// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var dadosPessoais = {
  nome: 'werbert',
  sobrenome: 'wilson',
  idade: 30,
  fone: 996433142,
  profissao: 'tec de TI',
  localTrabalho: 'Fiesc',
  altura: 1.78,
  peso: 88,
}


// Crie um método no objeto anterior, que mostre o seu nome completo

var meusDados = {
  nome: 'werbert',
  sobreNome: 'Wilson',
  nomeCompleto: function(nomeCompleto){
    nomeCompleto = this.nome + this.sobreNome;
    return this.nomeCompleto
  }
}

meusDados.nomeCompleto();

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem