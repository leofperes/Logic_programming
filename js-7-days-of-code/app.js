// let numeroUm = 1
// let stringUm = '1'
// let numeroTrinta = 30
// let stringTrinta = '30'
// let numeroDez = 10
// let stringDez = '10'

// if (numeroUm == stringUm) {
//   console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
// } else {
//   console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
// }

// if (numeroTrinta === stringTrinta) {
//   console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
// } else {
//   console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
// }

// if (numeroDez == stringDez) {
//   console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
// } else {
//   console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
// }

let nome = prompt('Qual o seu nome?');
let age = prompt('Quantos anos você tem?')
let programmingLanguage = prompt('Qual linguagem de programação você está estudando?')

alert(`Olá ${nome}, você tem ${age} e já está aprendendo ${programmingLanguage}!`)

let continueLearning = prompt(`Você gosta de estudar ${programmingLanguage}? Responda com 1 para SIM ou 2 para NÃO`)

let userChoice = continueLearning == 1 ? alert('Muito bom! Continue estudando e você terá muito sucesso') : alert('Ahh que pena... Já tentou aprender outras linguagens?');

// switch (continueLearning) {
//   case 1:
//     alert('Muito bom! Continue estudando e você terá muito sucesso')
//     break;

//   case 2:
//     alert('Ahh que pena... Já tentou aprender outras linguagens?')
//     break;
// }