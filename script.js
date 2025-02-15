// Dados dos produtos (simulando uma API)
const produtos = [
    {
        nome: "Relógio Elegance",
        descricao: "Design sofisticado para ocasiões especiais.",
        preco: 899.90,
        imagem: "relogio1.jpg"
    },
    {
        nome: "Relógio Sport",
        descricao: "Ideal para quem busca resistência e estilo.",
        preco: 759.90,
        imagem: "relogio2.jpg"
    },
    {
        nome: "Relógio Classic",
        descricao: "Estilo clássico para todos os momentos.",
        preco: 699.90,
        imagem: "relogio3.jpg"
    },
    {
        nome: "Relógio Modern",
        descricao: "Design moderno e inovador.",
        preco: 999.90,
        imagem: "relogio4.jpg"
    },
    {
        nome: "Relógio Vintage",
        descricao: "Inspirado nos clássicos dos anos 70.",
        preco: 849.90,
        imagem: "relogio5.jpg"
    },
    {
        nome: "Relógio Minimalist",
        descricao: "Simplicidade e elegância em um único design.",
        preco: 599.90,
        imagem: "relogio6.jpg"
    },
    {
        nome: "Relógio Luxury",
        descricao: "Para quem busca o luxo e a exclusividade.",
        preco: 1299.90,
        imagem: "relogio7.jpg"
    },
    {
        nome: "Relógio Adventure",
        descricao: "Feito para os amantes de aventuras.",
        preco: 899.90,
        imagem: "relogio8.jpg"
    }
];

// Carrinho de compras
let carrinho = [];

// Função para carregar produtos dinamicamente
function carregarProdutos() {
    const grid = document.getElementById("produtos-grid");
    if (grid) {
        produtos.forEach(produto => {
            const produtoHTML = `
                <div class="produto">
                    <img src="${produto.imagem}" alt="${produto.nome}">
                    <h3>${produto.nome}</h3>
                    <p>${produto.descricao}</p>
                    <span>R$ ${produto.preco.toFixed(2)}</span>
                    <button class="btn" onclick="adicionarAoCarrinho('${produto.nome}')">Comprar</button>
                </div>
            `;
            grid.innerHTML += produtoHTML;
        });
    }
}

// Função para adicionar produto ao carrinho
function adicionarAoCarrinho(nomeProduto) {
    const produto = produtos.find(p => p.nome === nomeProduto);
    if (produto) {
        carrinho.push(produto);
        atualizarCarrinho();
        alert(`${produto.nome} foi adicionado ao carrinho!`);
    }
}

// Função para atualizar o carrinho
function atualizarCarrinho() {
    const contador = document.getElementById("contador-carrinho");
    const lista = document.getElementById("carrinho-lista");
    const total = document.getElementById("carrinho-total");

    // Atualizar contador
    if (contador) contador.textContent = carrinho.length;

    // Atualizar lista de itens
    if (lista) {
        lista.innerHTML = carrinho.map(item => `
            <li>${item.nome} - R$ ${item.preco.toFixed(2)}</li>
        `).join("");
    }

    // Atualizar total
    if (total) {
        const totalCarrinho = carrinho.reduce((acc, item) => acc + item.preco, 0);
        total.textContent = totalCarrinho.toFixed(2);
    }
}

// Função para mostrar/ocultar o card do carrinho
function mostrarCarrinho(event) {
    event.stopPropagation(); // Impede que o clique se propague para o documento
    const card = document.getElementById("carrinho-card");
    if (card) card.classList.toggle("ativo");
}

// Fechar o card do carrinho ao clicar fora
document.addEventListener("click", (event) => {
    const card = document.getElementById("carrinho-card");
    const carrinhoIcone = document.querySelector(".carrinho-icone");

    // Verifica se o clique foi fora do card e do ícone do carrinho
    if (card && carrinhoIcone && !card.contains(event.target) {
        card.classList.remove("ativo");
    }
});

// Efeito de rolagem no cabeçalho
window.addEventListener("scroll", () => {
    const header = document.getElementById("header");
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }
});

// Carregar produtos ao carregar a página
window.onload = carregarProdutos;