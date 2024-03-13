// Dados de exemplo das lojas (substitua por dados reais do banco de dados)
const lojasData = [
    { nome: "Loja 1", setor: "Alimentos", endereco: "Rua A, 123" },
    { nome: "Loja 2", setor: "Eletrônicos", endereco: "Rua B, 456" },
    // Adicione mais lojas conforme necessário
];

// Função para renderizar as lojas na página
function renderLojas() {
    const lojasSection = document.getElementById('lojas');
    lojasSection.innerHTML = ''; // Limpa o conteúdo atual

    // Itera sobre os dados das lojas e cria elementos HTML para cada uma
    lojasData.forEach(loja => {
        const lojaElement = document.createElement('div');
        lojaElement.classList.add('loja');

        const nomeElement = document.createElement('h2');
        nomeElement.textContent = loja.nome;

        const setorElement = document.createElement('p');
        setorElement.textContent = `Setor: ${loja.setor}`;

        const enderecoElement = document.createElement('p');
        enderecoElement.textContent = `Endereço: ${loja.endereco}`;

        lojaElement.appendChild(nomeElement);
        lojaElement.appendChild(setorElement);
        lojaElement.appendChild(enderecoElement);

        lojasSection.appendChild(lojaElement);
    });
}

// Renderiza as lojas ao carregar a página
window.onload = renderLojas;
