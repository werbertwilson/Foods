function areaQuadrada(lado){
  return lado*lado;
}

console.log(areaQuadrada(10))

function pi(){
  return 3.14;
}

var total = 5 *pi();
console.log(total);
console.log(pi);
console.log(pi());

function imc(peso, altura){
  var imc = peso / (altura * altura);
  return imc;
}

//peso = prompt('Informe seu peso');
//altura = prompt('Informe sua almtura em M');

//console.log(imc(80, 1.8));
//console.log(imc(peso, altura));

function corFavorita(cor){
  if(cor ==='azul'){
    return 'Eu gosto do céu';
  } else if (cor =='verde') {
    return 'Eu gosto da grama';
  } else {
    return 'Eu não gosto de cores';
  }

}

//minhaCorFavorita = prompt('Qual sua cor favorita?');
//console.log(corFavorita(minhaCorFavorita));

function imc2(peso, altura){
  const imc2 = peso / (altura * altura);
  console.log(imc2)
}

console.log('teste');
imc2(80, 1.80);
console.log('teste');
console.log(imc2(80, 1.80));
console.log('teste');