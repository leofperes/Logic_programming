// #1 concat strings
let minhaLista = [1,2,3]
let outraLista = [3,4,5,6]
let novaLista = minhaLista.concat(outraLista)
console.log(novaLista)

// #2 remover ultimo elemento do array
novaLista.pop()
console.log(novaLista)

// #4 método fisher-yates (embaralhar array)
for (let indice = novaLista.length; indice; indice--) {
    const indiceAleatorio = Math.floor(Math.random() * indice);
    const elemento = novaLista[indice - 1];
    novaLista[indice - 1] = novaLista[indiceAleatorio];
    novaLista[indiceAleatorio] = elemento;
}
console.log(novaLista)

// #5 remover duplicatas array
function removerDuplicatas(arr) {
  return arr.filter(function(este, i) {
      return arr.indexOf(este) === i;
  });
}

novaLista = removerDuplicatas(novaLista)
console.log(novaLista)