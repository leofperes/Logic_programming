
//---------- DAY 1 ----------//
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

//---------- DAY 2 ----------//
// let nome = prompt('Qual o seu nome?');
// let age = prompt('Quantos anos você tem?')
// let programmingLanguage = prompt('Qual linguagem de programação você está estudando?')

// alert(`Olá ${nome}, você tem ${age} e já está aprendendo ${programmingLanguage}!`)

// let continueLearning = prompt(`Você gosta de estudar ${programmingLanguage}? Responda com 1 para SIM ou 2 para NÃO`)

// let userChoice = continueLearning == 1 ? alert('Muito bom! Continue estudando e você terá muito sucesso') : alert('Ahh que pena... Já tentou aprender outras linguagens?');

// switch (continueLearning) {
//   case 1:
//     alert('Muito bom! Continue estudando e você terá muito sucesso')
//     break;

//   case 2:
//     alert('Ahh que pena... Já tentou aprender outras linguagens?')
//     break;
// }


//---------- DAY 3 ----------//
// var chooseRoadmap = prompt('Você deseja seguir para o Front-end ou para o Back-End?')
// var arrayLanguages = [];

// function choosePath(array) {
//   prompt('Digite 1 para seguir se especializando na área escolhida ou digite 2 para seguir se desenvolvendo para se tornar fullstack?')
  
//   var userChoicesLanguages = prompt('Deseja aprender alguma linguaguem?')
//     while (userChoicesLanguages.toLowerCase() == 'sim') {
//       var language = prompt('Digite qual deseja aprender')
//       array.push(language);
//       userChoicesLanguages = prompt('Deseja aprender mais alguma linguaguem?')
//     }
//   }

// if(chooseRoadmap == 'front-end'){
//   let frontEndLanguage = prompt('Deseja aprender React ou Vue?')
//   choosePath(arrayLanguages)
//   alert(`As linguagens que deseja aprender é: ${frontEndLanguage}, ${arrayLanguages}`)
// } else if(chooseRoadmap == 'back-end'){
//   let backEndLanguage = prompt('Deseja aprender C# ou Java?')
//   choosePath(arrayLanguages)
//   alert(`As linguagens que deseja aprender é: ${backEndLanguage}, ${arrayLanguages}`)
// }


//---------- DAY 4 ----------//
// function gerarNumeroAleatorio() {
//   return parseInt(Math.random() * 10 + 1);
// }

// let randomNumber = gerarNumeroAleatorio()
// let userAttempt = 3

// for (let i = userAttempt; i > 0; i--) {
//   let userChoice = prompt('Tente adivinhar o número sorteado entre 1 e 10')
//   if (userChoice > randomNumber) {
//     alert(`O número escolhido é maior que o sorteado, você tem ${i - 1} tentativas`)
//   } else if(userChoice < randomNumber){
//     alert(`O número escolhido é menor que o sorteado, você tem ${i - 1} tentativas`)
//   } else {
//     alert(`Parabéns, você acertou!! Restando ${i} tentativas`)
//     break;
//   }
// }
// alert('Game over! Suas tentativas acabaram.')

//---------- DAY 5 ----------//

var wishlist = [{
  Frutas: [],
  Laticinios: [],
  Carne: [],
  Vegetais: []
}]

var userDecision = ""

function handleWishlist(){
  userDecision = prompt('Deseja adicionar algo na lista de compras?')
  return userDecision;
}

function formatarListaDeCompras(lista) {
  let resultado = "";

  for (const categoria in lista) {
    if (lista[categoria].length > 0) {
      resultado += `${categoria}: ${lista[categoria].join(', ')}\n`;
    }
  }

  return resultado.trim();
}

handleWishlist();

while (userDecision == 'sim') {
  let userProducts = prompt('Qual alimento deseja inserir na lista?')
  let category = prompt('Em qual categoria se enquadra? Frutas/Laticinios/Carne/Vegetais')

  if (wishlist[0].hasOwnProperty(category)) {
    wishlist[0][category].push(userProducts);
  } else {
      alert('Categoria invalida')
  }
  
  if(wishlist[0][category].includes(userProducts)){
    let removeItem = prompt(`Sua lista de compras ficou:\n\n${formatarListaDeCompras(wishlist[0])}. Deseja remover algum item?`);
    while (removeItem == 'sim') {
      let category = prompt('Em qual categoria está o item que deseja remover? Frutas/Laticinios/Carne/Vegetais');
      let itemRemoved = prompt(`Sua lista de compras ficou:\n\n${formatarListaDeCompras(wishlist[0])}. Qual item deseja remover?`)
      let lowerCaseItemRemoved = itemRemoved.toLowerCase();

      if (wishlist[0][category].includes(lowerCaseItemRemoved)) {
        let index = wishlist[0][category].indexOf(lowerCaseItemRemoved);
        wishlist[0][category].splice(index, 1);
      } else {
        alert('Não foi possível encontrar o item dentro da lista!');
      }
      removeItem = prompt(`Sua lista de compras ficou:\n\n${formatarListaDeCompras(wishlist[0])}. Deseja remover algum item?`);
    }
  }

  handleWishlist();
}








