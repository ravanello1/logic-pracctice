let valorTotalGeral;

function adicionar() {
  //recuperar valores, nome do produto, quantidade e valor
  let produto = document.getElementById('produto').value;
  let quantidade = parseInt(document.getElementById('quantidade').value);
  let nomeProduto = produto.split('-')[0];          
  let valorUnitario = produto.split('R$')[1];

  //calcular o preço, o nosso subtotal
  let preco = quantidade * valorUnitario;

  //adicionar no carrinho
  let carrinho = document.getElementById('lista-produtos');
  carrinho.innerHTML = carrinho.innerHTML +
  `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
    </section>`

    valorTotalGeral = valorTotalGeral + preco;

    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$${valorTotalGeral}`;

    document.getElementById('quantidade').value= 0;
}

function limpar() {
  valorTotalGeral = 0;
  document.getElementById('lista-produtos').innerHTML = '';
  document.getElementById('valor-total').textContent = 'R$0';
}
