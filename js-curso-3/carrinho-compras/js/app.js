var select = document.getElementById('produto')
var sectionProducts = document.getElementById('lista-produtos');
var wishlist;
var value;
var qtyProducts;
var valorTotalCarrinho = 0;
var validarQty

select.addEventListener('change', function(){
  value = select.options[select.selectedIndex].value;
});


function adicionar(){
  quantidadeSelecionada();
  validarQty = qtyProducts
  console.log(validarQty)
  let textoProduto = select.options[select.selectedIndex].text;
  if(textoProduto !== "Selecione um produto" && validarQty > 0 ){
    let nomeProduto = value.split('-')[0]
    let totalUnitario = somarValoresUnitariosProdutos();
    let produtoTotal = totalUnitario * qtyProducts;
    sectionProducts.innerHTML = sectionProducts.innerHTML + `<section class="carrinho__produtos__produto"><span class="texto-azul">${qtyProducts}X</span> ${nomeProduto} <span class="texto-azul">R$${produtoTotal}</span>
    </section>`
    somarValoresProdutos(produtoTotal);
  } else {
    alert('Selecione um produto ou informe a quantidade desejada')
  }
}

function limpar(){
  var produtos = sectionProducts.querySelectorAll('.carrinho__produtos__produto');
  produtos.forEach(function(produto) {
    sectionProducts.removeChild(produto);
  });
  valorTotalCarrinho = 0;
  mostrarTotalCarrinho();
}

function somarValoresProdutos(totalProduto){
  valorTotalCarrinho += totalProduto;
  mostrarTotalCarrinho();
}

function quantidadeSelecionada(){
  qtyProducts = parseInt(document.getElementById('quantidade').value, 10) || 0;
  return qtyProducts
}

function mostrarTotalCarrinho(){
  let spanTotal = document.getElementById('valor-total');
  spanTotal.textContent = valorTotalCarrinho.toFixed(2);
}

function somarValoresUnitariosProdutos(){
  let valorProdutoUnitario = parseFloat(value.split('R$')[1]);
  return valorProdutoUnitario;
}
