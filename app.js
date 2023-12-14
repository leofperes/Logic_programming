alert('Boas vindas ao jogo do número secreto')
let numeroSecreto = parseInt(Math.random() * 10);
let chute;
let tentativas = 1; 
console.log(numeroSecreto)

while (chute != numeroSecreto){
  chute = prompt('Escolha um numero entre 0 e 10')

  if(chute == numeroSecreto){
    break;
  } else {
    if(chute > numeroSecreto){
      alert(`O núemro secreto é menor que ${chute}`)
    } else {
      alert(`O núemro secreto é maior que ${chute}`)
    }
    tentativas++;
  }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`)

//Decrementação
// let qtdNumeros = prompt('Digite a quantidade de números para o cálculo da média:');
// let soma = 0;
// let contador = qtdNumeros;

// while(contador > 0){
//     let numero = parseInt(prompt('Digite o numero:'));
//     soma += numero;
//     contador--;
// }

// let media = soma / qtdNumeros;

// console.log(media);

//Mudando valor de variável inicializado
// let qtdNumeros = prompt('Digite a quantidade de números para o cálculo da média:');
// let soma = 0;
// let contador = 0;

// while(contador < qtdNumeros){
//     let numero = parseInt(prompt('Digite o numero:'));
//     soma += numero;
//     contador++;
// }

// let media = soma / qtdNumeros;

// console.log(media);



// alert('Seja bem vindo ao nosso site!.');
// let name = 'Lua';
// let idade = 25;
// let numeroDeVendas = 50;
// let saldoDisponivel = 1000;
// let errorMessage = 'Erro! Preencha todos os campos.'

// alert(errorMessage);
// name = prompt('Digite seu nome');
// idade = prompt('Digite sua idade');

// if(idade >= 18){
//   alert('Pode tirar a habilitação')
// } else {
//   alert('Sinto muito, menores de idade não podem tirar habilitação')
// } 

//Challenge 1/5
// alert('Seja bem vindo ao nosso site!')
// let dayWeek = ['sabado', 'domingo']

// let userGuess = prompt('Qual é o dia da semana?')
// if (userGuess == dayWeek[0] || userGuess == dayWeek[1]){
//   alert('Bom fim de semana!')
// } else {
//   alert('Boa semana!')
// }

//Challenge 2/5
// alert('Seja bem vindo ao nosso site!')
// let userNumber = prompt('Digite um número qualquer')
// if(userNumber < 0) {
//   alert(`O número digitado ${userNumber} é negativo`)
// } else {
//   alert(`O número digitado ${userNumber} é positivo`)
// }

//Challenge 3/5
// alert('Seja bem vindo ao nosso site!')
// let userPontuation = prompt("Por favor digite sua pontuação final")
// if(userPontuation >= 100){
//   alert('Parabens, voce venceu!!!')
// } else {
//   alert('Tente novamente para ganhar')
// }

//Challenge 4/5
// alert('Seja bem vindo ao nosso site!')
// let name = 'Leonardo'
// let idade = 22
// let senha = prompt('Digite sua senha')
// let saldoDaConta = 3480

// if(senha == 'Jade5758'){
//   alert(`Bem vindo ${name}`)
//   alert(`Seu saldo bancário é ${saldoDaConta}`)  
//   } else {
//     alert('Senha incorreta, tente novamente')
//   }

//-----------------------------------------//
//-----Challenge Looping-----//

// alert('Bem vindo ao contador')
// let contador = 1;
// while(contador < 11){
//   alert(`${contador}`)
//   contador++;
// }

// alert('Bem vindo ao contador')
// let contador = 10;
// while(contador > 0){
//   alert(`${contador}`)
//   contador--;
// }

// alert('Bem vindo ao contador') 
// let contador = prompt('Escolha um numero para para ser o contador')
// while(contador >= 0){
//   console.log(contador)
//   contador--;
// }

// alert('Bem vindo ao contador') 
// let qtdNumeros = prompt('Digite a quantidade de números para o cálculo da média:');
// let contador = 0;
// while(contador <= qtdNumeros){
//   console.log(contador)
//   contador++;
// }