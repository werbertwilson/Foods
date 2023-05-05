function areaQuadrada(lado) {
  return lado*lado;
}

function imc(peso, altura){
  var imc = peso / (altura * altura);
  return imc;
}

/* valorDaArea = areaQuadrada(prompt('Digite um valor'))
alert('Valor da área é ' + valorDaArea + ' m²') */

imcPaciente = imc(50, 195);

alert('Seu imc é ' + imcPaciente);

