let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto){
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo de adivinhar o número');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute(){
  let chute = document.querySelector('input').value
  console.log(chute == numeroSecreto ? 'Parabens vc acertou' : 'Errou');
}

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10 + 1);
}


//--------Challenges--------//

//#1
// function helloWorld(){
//   console.log('Olá, mundo')
// }
// helloWorld();

//#2 
// function readName(nome){
//   console.log(`Olá, ${nome}`)
// }
// readName('Leonardo');

//#3
// function doubleNumber(number){
//   let double = parseInt(number*2);
//   console.log(double)
// }
// doubleNumber(7)

//#4
// function averageNumbers(num1, num2, num3){
//   let average = (num1 + num2 + num3) / 3
//   return average
// }
// var resultadoMedia = calcularMedia(10, 20, 30);
// console.log("A média é: " + resultadoMedia);

//#5
// function biggerNumber(num1, num2){
//   if (num1 > num2) {
//     return num1;
//   } else {
//     return num2;
//   }
// }
// var numeroMaior = maiorEntreDoisNumeros(5, 10);
// console.log("O número maior é: " + numeroMaior);