// Simulação de dados de postagens (substitua por dados reais do banco de dados)
const postsData = [
    {
        id: 1,
        imageUrl: 'caminho/para/imagem1.jpg',
        author: 'usuario1',
        description: 'Descrição da postagem 1',
        likes: 10
    },
    {
        id: 2,
        imageUrl: 'caminho/para/imagem2.jpg',
        author: 'usuario2',
        description: 'Descrição da postagem 2',
        likes: 20
    },
    // Adicione mais postagens conforme necessário
];

// Função para renderizar as postagens no feed da comunidade
function renderPosts() {
    const feed = document.getElementById('feed');

    // Limpa o feed antes de adicionar novas postagens
    feed.innerHTML = '';

    // Itera sobre os dados das postagens e cria elementos HTML para cada uma
    postsData.forEach(post => {
        const card = document.createElement('div');
        card.classList.add('card-post');

        const image = document.createElement('img');
        image.src = post.imageUrl;

        const body = document.createElement('div');
        body.classList.add('card-body');

        const author = document.createElement('div');
        author.classList.add('author');
        author.innerHTML = `<img src="caminho/para/avatar/${post.author}.jpg" alt="Foto do autor"> <span class="username">${post.author}</span>`;

        const description = document.createElement('p');
        description.classList.add('description');
        description.textContent = post.description;

        const likes = document.createElement('div');
        likes.classList.add('likes');
        likes.innerHTML = `<button class="like-button" data-id="${post.id}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></button> <span>${post.likes}</span>`;

        body.appendChild(author);
        body.appendChild(description);
        body.appendChild(likes);

        card.appendChild(image);
        card.appendChild(body);

        feed.appendChild(card);
    });
}

// Função para lidar com o evento de clique no botão Nova Postagem
function handleNovaPostagemClick() {
    // Redirecionando para a página de postagem
    window.location.href = "../posts/posts.html"; // Substitua "caminho/para/posts.html" pelo caminho correto para o arquivo posts.html
}

document.addEventListener("DOMContentLoaded", function() {
    // Selecionando o botão Nova Postagem
    var btnNovaPostagem = document.getElementById("btnNovaPostagem");

    // Adicionando um evento de clique ao botão
    btnNovaPostagem.addEventListener("click", handleNovaPostagemClick);
});


// Adicionando listeners de evento quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    // Selecionando o botão Nova Postagem
    const btnNovaPostagem = document.getElementById('btnNovaPostagem');

    // Adicionando um evento de clique ao botão Nova Postagem
    btnNovaPostagem.addEventListener('click', handleNovaPostagemClick);

    // Adicionando um listener de evento de clique no documento para o botão de curtir
    document.addEventListener('click', handleLikeButtonClick);

    // Renderiza as postagens ao carregar a página
    renderPosts();
});
