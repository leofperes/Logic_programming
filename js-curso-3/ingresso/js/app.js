var ingressosDisponiveis;
const mapeamentoIngressos = {
  "inferior": "1",
  "superior": "2",
  "pista": "3"
}

// Capturar value do select para cada tipo ingresso
function pegarValueTipoIngresso(){
  return document.getElementById('tipo-ingresso').value;
}

// Capturar value do input para quantidade escolhida pelo usuario
function pegarValueQuantidadeIngresso(){
  return document.getElementById('qtd').value;
}

function pegarIngressosDisponiveis(){
  let tipoDeingresso = pegarValueTipoIngresso();
  let idCorrespondente = mapeamentoIngressos[tipoDeingresso]
  return document.getElementById(`qtd-ingresso-${idCorrespondente}`);
}

function comprar(){
  let quantidadeIngresso = pegarValueQuantidadeIngresso();
  ingressosDisponiveis = pegarIngressosDisponiveis();
  console.log(ingressosDisponiveis);
}
