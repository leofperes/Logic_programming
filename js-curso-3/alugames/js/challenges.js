//Checar se a palavra é um palindromo
function chooseWord(){
  let userWord = prompt('Digite uma palavra qualquer')
  let palindromo = reverse(userWord)
  if(palindromo == userWord){
    alert(`A palavra digitada é um palindromo. É lida da mesma forma de tras pra frente. ${palindromo}`)
  } else {
    alert(`A palavra lida de trás pra frente fica: ${palindromo}`)
  }
}

function reverse(s){
  return s.split('').reverse().join('')
}

chooseWord()

//Ordenar numeros em ordem crescente
let numberArray = []

function choosedNumber(){
  for (let i = 0; i < 3; i++) {
    let chosedNumbers = prompt('Digite um número')
    numberArray.push(chosedNumbers);
  }
  orderNumbers(numberArray)
  alert(`A ordenação dos números de menor pra maior é: ${numberArray}`)
}

function orderNumbers(e){ 
  return e.sort();
}

choosedNumber()