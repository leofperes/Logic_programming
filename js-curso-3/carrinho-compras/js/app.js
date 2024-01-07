var select = document.getElementById('produto');
var sectionProducts = document.getElementById('lista-produtos');
var wishlist;
var value;
var spans = [];
var qtyProducts;
var valorTotalCarrinho = 0;

select.addEventListener('change', function(){
  value = select.options[select.selectedIndex].value;
});

function adicionar(){
  quantidadeSelecionada();
  let totalUnitario = somarValoresUnitariosProdutos();
  wishlist = value;
  var newSpan = document.createElement('span');
  newSpan.setAttribute('class', 'texto-azul');
  let produtoTotal = totalUnitario * qtyProducts;
  newSpan.textContent = `${qtyProducts}X ${wishlist} - Total: R$ ${produtoTotal.toFixed(2)}`;
  sectionProducts.appendChild(newSpan);
  spans.push(newSpan);
  somarValoresProdutos(produtoTotal);
  return newSpan;
}

function limpar(){
  for (var i = 0; i < spans.length; i++) {
    sectionProducts.removeChild(spans[i]);
  }
  spans = [];
  valorTotalCarrinho = 0;
  mostrarTotalCarrinho();
}

function somarValoresProdutos(totalProduto){
  valorTotalCarrinho += totalProduto;
  mostrarTotalCarrinho();
}

function quantidadeSelecionada(){
  qtyProducts = document.getElementById('quantidade').value;
}

function mostrarTotalCarrinho(){
  let spanTotal = document.getElementById('valor-total');
  spanTotal.textContent = valorTotalCarrinho.toFixed(2);
}

function somarValoresUnitariosProdutos(){
  let valorProdutoUnitario = parseFloat(value.split('R$')[1]);
  return valorProdutoUnitario;
}
