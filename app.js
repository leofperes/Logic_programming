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
alert('Seja bem vindo ao nosso site!')
let userNumber = prompt('Digite um número qualquer')
if(userNumber < 0) {
  alert(`O número digitado ${userNumber} é negativo`)
} else {
  alert(`O número digitado ${userNumber} é positivo`)
}