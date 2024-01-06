let handleButton1 = document.getElementById('game-1').addEventListener("click", alterarStatus)
let handleButton2 = document.getElementById('game-2').addEventListener("click", alterarStatus)
let handleButton3 = document.getElementById('game-3').addEventListener("click", alterarStatus)

function exibirTextoNaTela(tag, texto){
  let campo = document.querySelector(tag);
  campo.textContent = texto;
}

function alterarStatus(event){
    if(event.target.classList.contains('dashboard__item__button--return')){
      event.target.classList.remove('dashboard__item__button--return')
      exibirTextoNaTela('a', 'Alugar')
    } else {
        event.target.classList.add('dashboard__item__button--return')
        exibirTextoNaTela('a', 'Devolver')
    }
}