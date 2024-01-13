var ingressosDisponiveis
var tipoDeingresso
const mapeamentoIngressos = {
  pista: '1',
  superior: '2',
  inferior: '3'
}

function pegarValueTipoIngresso() {
  return document.getElementById('tipo-ingresso').value
}

function pegarValueQuantidadeIngresso() {
  return document.getElementById('qtd').value
}

function pegarIngressosDisponiveis(e) {
  tipoDeingresso = pegarValueTipoIngresso()
  let idCorrespondente = mapeamentoIngressos[tipoDeingresso]
  if (e !== undefined) {
    document.getElementById(`qtd-ingresso-${idCorrespondente}`).innerHTML = e
  }
  return parseInt(
    document.getElementById(`qtd-ingresso-${idCorrespondente}`).textContent,
    10
  )
}

function atualizarQtdIngressosDisponiveis(disponivel, qtd) {
  return disponivel - qtd
}

function comprar() {
  let quantidadeIngresso = parseInt(pegarValueQuantidadeIngresso(), 10)
  var ingressosDisponiveis = parseInt(pegarIngressosDisponiveis(), 10)
  if (ingressosDisponiveis >= quantidadeIngresso) {
    let totalIngressosDisponiveis = atualizarQtdIngressosDisponiveis(
      ingressosDisponiveis,
      quantidadeIngresso
    )
    pegarIngressosDisponiveis(totalIngressosDisponiveis)
  } else {
    alert('Ingressos esgotados')
  }
}
