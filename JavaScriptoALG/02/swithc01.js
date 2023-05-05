var escolha = prompt('Escolha um valor uma cor \n 01 - Azul \n 02 - verde \n 03 - Amarelo \n 04 - Roxo ' );

switch (escolha) {
  case '01':
    alert('Você escolheu azul');
    break;
  case '02':
    alert('Você escolheu verde');
    break;
  case '03':
    alert('você escolheu amarelo');
    break;
  case '04':
    alert('você escolheu roxo');
    break;
  default:
    alert('valor incorreto')
}