alert('Seja bem vindo ao nosso site!.');
let name = 'Lua';
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
let errorMessage = 'Erro! Preencha todos os campos.'

alert(errorMessage);
name = prompt('Digite seu nome');
idade = prompt('Digite sua idade');

if(idade >= 18){
  alert('Pode tirar a habilitação')
} else {
  alert('Sinto muito, menores de idade não podem tirar habilitação')
}