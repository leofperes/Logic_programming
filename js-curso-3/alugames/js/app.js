
// My solution

// let handleButton1 = document.getElementById('game-1').addEventListener("click", alterarStatus)
// let handleButton2 = document.getElementById('game-2').addEventListener("click", alterarStatus)
// let handleButton3 = document.getElementById('game-3').addEventListener("click", alterarStatus)

// function exibirTextoNaTela(tag, texto){
//   let campo = document.querySelector(tag);
//   campo.textContent = texto;
// }

// function alterarStatus(event){
//     if(event.target.classList.contains('dashboard__item__button--return')){
//       event.target.classList.remove('dashboard__item__button--return')
//       exibirTextoNaTela('a', 'Alugar')
//     } else {
//         event.target.classList.add('dashboard__item__button--return')
//         exibirTextoNaTela('a', 'Devolver')
//     }
// }

let usuario = 'lfp'
let senha = '123'
var gameClicado
let contarAlugados = []


function confirmarDevolucao(id){
  alert('Digite seu usuário e senha')
  let validacaoUsuario = prompt('Usuário:')
  let validacaoSenha = prompt('Senha:')
  gameClicado = document.getElementById(`game-${id}`);
  if(validacaoUsuario == usuario && validacaoSenha == senha){
    alterarStatus()
  } else {
    alert('Usuário ou senha incorreta!')
  }
} 

function alterarStatus(){
  let imagem = gameClicado.querySelector('.dashboard__item__img')
  let botao = gameClicado.querySelector('.dashboard__item__button')

  if(imagem.classList.contains('dashboard__item__img--rented')){
    imagem.classList.remove('dashboard__item__img--rented')
    botao.classList.remove('dashboard__item__button--return')
    botao.textContent = 'Alugar'
    contarAlugados.pop(gameClicado);
    console.log(contarAlugados.length)
  } else {
    imagem.classList.add('dashboard__item__img--rented')
    botao.classList.add('dashboard__item__button--return')
    botao.textContent = 'Devolver'
    contarAlugados.push(gameClicado);
    console.log(contarAlugados.length)
  }
}

