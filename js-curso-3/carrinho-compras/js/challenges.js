
function adicionar(){
  // Challenge 2 - get value from any input
  let valueQty = document.getElementById('quantidade').value
  let changeText = document.getElementById('titulo_carrinho')
  // --------------
  // Challenge 3 - change any text using textContent
  changeText.textContent = 'TESTE'
  console.log(valueQty)
  //---------------
  // Challenge 4 - sum 2 variables and show in template string
  let num1 = prompt('Digite um número')
  let num2 = prompt('Digite outro número')
  let sum = num1 + num2
  alert(`a soma do número ${num1} e ${num2} é ${sum}`)
  //---------------
  // Challenge 5 - get a string and split them
  let phrase = 'any desktop publishing packages; and web page editors now use Lorem Ipsum as their; default model text,'
  let splitedPhrase = phrase.split(';')
  console.log(splitedPhrase)
  // Challenge 6 - get a string of numbers and split them by comma
  let numbers = '1,20,40,21,3,9,2,89'
  let splitedNumbers = numbers.split(',')
  console.log(splitedNumbers)
}

