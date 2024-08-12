let totalGeral;
limpar();

function adicionar() {
    //recuperar valores
    //calcular o preço
    //atualizar o valor total
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    let preco = quantidade * valorProduto;
    //adiconar o carrinho
    let carrinho = document.getElementById('lista-produtos'); 
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto"><span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span></section>`;

    totalGeral = totalGeral + preco;
    let total = document.getElementById('valor-total');
    total.textContent = `R$ ${totalGeral}`;

    document.getElementById('quantidade').value = '';

    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    }
}

function limpar() {
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$ 0';
    totalGeral = 0;
}