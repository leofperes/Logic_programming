let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function initialMessage(){
  exibirTextoNaTela('h1', 'Jogo de adivinhar o número');
  exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10 + 1);
}

function cleanNumber() {
  chute = document.querySelector('input');
  chute.value = ''
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  cleanNumber();
  tentativas = 1;
  initialMessage();
  document.getElementById('reiniciar').setAttribute('disabled', true)
}

initialMessage()

function verificarChute(){
  let chute = document.querySelector('input').value

  if(chute == numeroSecreto){
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativa = `Você acertou com ${tentativas} ${palavraTentativa}`;
    exibirTextoNaTela('h1', mensagemTentativa);
    exibirTextoNaTela('p', 'Você descobriu o número secreto');
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
      if(chute > numeroSecreto){
        exibirTextoNaTela('p', 'O número secreto é menor que o chute')
        tentativas++;
      } else {
          exibirTextoNaTela('p', 'O número secreto é maior que o chute')
          tentativas++;
      }
  }
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

//#6
// function quadrado(num){
//   return num * num
// }
// let resultado = quadrado(4)
// console.log(resultado);