let arrayNomes = []
let arraySorteio = []
let listaIncluidos = document.getElementById('lista-amigos')
let listaSorteio = document.getElementById('lista-sorteio')

function adicionar(){
  let inputNomes = document.getElementById('nome-amigo').value
  if(inputNomes == ""){
    alert('Campo vazio, preencha com um nome')
  } else {
    arrayNomes.push(inputNomes)
    listaIncluidos.textContent = arrayNomes
  }
}

function sortear(){
  arraySorteio = embaralha(arrayNomes)
  listaIncluidos.innerHTML = ""
  listaSorteio.innerHTML = ""
  for (let i = 0; i < arraySorteio.length; i++) {
    //o array começa na posição 0, então precisa ser tamanho do array - 1
    if(i == arraySorteio.length - 1){
      listaSorteio.innerHTML = listaSorteio.innerHTML +  arraySorteio[i] + '-->' + arraySorteio[0] + '<br>'
    } else {
      listaSorteio.innerHTML = listaSorteio.innerHTML +  arraySorteio[i] + '-->' + arraySorteio[i + 1] + '<br>'
    }
  }
}

function embaralha(lista) {
  for (let indice = lista.length; indice; indice--) {
      const indiceAleatorio = Math.floor(Math.random() * indice);
      const elemento = lista[indice - 1];
      lista[indice - 1] = lista[indiceAleatorio];
      lista[indiceAleatorio] = elemento;
  }
  return lista
}

function reiniciar(){
  arrayNomes = [""]
  arraySorteio = [""]
  listaIncluidos.textContent = arrayNomes
  listaSorteio.innerHTML = arraySorteio
}