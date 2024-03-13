// Array para armazenar as postagens da comunidade
let posts = [];

// Função para adicionar uma postagem à comunidade
function addPost(productName, discount, image) {
    const post = {
        productName: productName,
        discount: discount,
        image: image,
        likes: 0
    };
    posts.push(post);
    renderPosts();
}

// Função para renderizar as postagens da posts na página
function renderPosts() {
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = '';

    posts.forEach((post, index) => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h3>${post.productName}</h3>
            <p>Desconto: ${post.discount}%</p>
            <img src="${post.image}" alt="Imagem do Produto">
            <p>Curtidas: ${post.likes}</p>
            <button class="btn-like" onclick="likePost(${index})">Curtir</button>
        `;
        postsContainer.appendChild(postElement);
    });
}

// Função para adicionar curtida a uma postagem
function likePost(index) {
    posts[index].likes++;
    renderPosts();
}

// Event listener para o formulário de postagem
document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const productName = document.getElementById('productName').value;
    const discount = document.getElementById('discount').value;
    const imageFile = document.getElementById('image').files[0];
    const imageURL = URL.createObjectURL(imageFile);
    addPost(productName, discount, imageURL);
    // Limpa os campos do formulário após a postagem
    document.getElementById('productName').value = '';
    document.getElementById('discount').value = '';
    document.getElementById('image').value = '';
});

// Inicialização: renderiza as postagens na página
renderPosts();
