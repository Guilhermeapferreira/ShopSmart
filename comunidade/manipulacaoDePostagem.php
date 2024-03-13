<?php
// Conexão com o banco de dados
$host = 'localhost';
$dbname = 'seu_banco_de_dados';
$username = 'seu_usuario';
$password = 'sua_senha';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Erro ao conectar ao banco de dados: " . $e->getMessage());
}

// Função para adicionar uma nova postagem
function addPost($imageUrl, $author, $description) {
    global $pdo;
    $stmt = $pdo->prepare("INSERT INTO posts (imageUrl, author, description) VALUES (?, ?, ?)");
    $stmt->execute([$imageUrl, $author, $description]);
}

// Função para recuperar todas as postagens
function getAllPosts() {
    global $pdo;
    $stmt = $pdo->query("SELECT * FROM posts");
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

// Exemplo de uso:

// Adiciona uma nova postagem
addPost('caminho/para/imagem.jpg', 'usuario1', 'Descrição da postagem');

// Recupera todas as postagens
$posts = getAllPosts();
foreach ($posts as $post) {
    echo "ID: {$post['id']}, Autor: {$post['author']}, Descrição: {$post['description']}<br>";
}
?>
