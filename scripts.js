let carrinho = [];
let total = 0;

// Função para adicionar item ao carrinho
function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    total += preco;
    atualizarCarrinho();
}

// Função para atualizar o carrinho
function atualizarCarrinho() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    
    carrinho.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = `${item.
