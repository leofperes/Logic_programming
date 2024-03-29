# <h2>SOBRE</h2>
![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)

<h3>Reforçar a lógica de programação com Javascript</h3>

O projeto atual está divido em pastas que correspondem aos cursos de lógica de programação utilizando Javascript na Web da Alura (com excessão da pasta "js-7-days-of-code").

Repare que existe muitos códigos comentados, são todos desafios e exercícios disponibilizados pela Alura e que eu realizei de acordo com meus conhecimentos.

<h4>Alugames</h4>

Será encontrado conteúdos como: declaração de variáveis, alert, prompt, laços de repetição condicionais, funções nativas do js para adicionar e remover classes ou textos. Possui desafios resolvidos no arquivo <strong>challenges.js</strong>

<h4>Carrinho-compras</h4>

Foi utilizado estrutura de dados como o Array, uso de funções para evitar repetição no código, funções passando paramêtros, capturar valores de input ou clicks, função nativa js .split(). Possui desafios resolvidos no arquivo <strong>challenges.js</strong>

<h4>Ingressos</h4>

Foram usados objetos para servir de auxilio em um mapeamento de um array, funções passando paramêtros e função parseInt para transformar uma string de números em números inteiros. Possui desafios resolvidos no arquivo <strong>challenges.js</strong>

<h4>Amigo Secreto</h4>

Maior uso de arrays e os manipulando, utilizando push e pop para adicionar ou remover elementos respectivamente, método fisher-yates para embaralhar o array, e nova função nativa filter para remover duplicatas de um array.

----
<h2>Comandos GIT</h2>

Como o git controla as mudanças - O controle de mudanças do Git é feito através dos commits. Cada commit armazena o estado completo do projeto em um determinado momento por meio de um snapshot. Ou seja, cada commit é um registro completo do repositório no momento em que esse commit foi criado.

git status // Verificar quais arquivos foram modificados

git add . // Serve para adicionar todos os arquivos de um projeto ao repositório local

git commit -m "Mensagem" // Registrar mudanças no repositório

git log // Mostrar a lista de historico de commits do repositório

git push // Enviar os commits do repositório local ao repositório remoto 

git pull // Baixar os commits do repositorio remoto para o repositorio local

git revert ID do commit// Desfazer alterações em um commit, o git cria um novo commit para reverter as alterações

git reset --hard ID do commit // Apaga o commit desejado, porém tem que selecionar o ID anterior do commit que deseja apagar

git commit --amend -m "troca mensagem" // Troca a mensagem do commit

----

<h2>Método Fisher-Yates</h2>

O algoritmo de Fisher-Yates, também conhecido como o algoritmo de embaralhamento de Knuth ou o algoritmo de shuffle de Durstenfeld, é um algoritmo para gerar uma permutação aleatória de um conjunto finito. Ele foi projetado para embaralhar um array ou lista de forma eficiente e uniformemente aleatória.

O algoritmo opera trocando elementos dentro do array. A ideia básica é percorrer o array da direita para a esquerda e, para cada elemento, trocá-lo aleatoriamente com um elemento anterior a ele (incluindo ele mesmo). Esse processo é repetido até que todo o array esteja embaralhado.
