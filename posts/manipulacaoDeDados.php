<?php
// Inclui o arquivo de conexão com o banco de dados
include 'conexao.php';

// Verifica se o formulário foi submetido
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Captura os dados do formulário
    $productName = $_POST['productName'];
    $discount = $_POST['discount'];
    // Aqui você pode capturar outros dados, como a imagem do produto

    // Prepara a instrução SQL para inserir o post no banco de dados
    $sql = "INSERT INTO posts (productName, discount) VALUES ('$productName', '$discount')";

    // Executa a instrução SQL
    if ($conexao->query($sql) === TRUE) {
        echo "Postagem realizada com sucesso.";
    } else {
        echo "Erro ao tentar inserir a postagem: " . $conexao->error;
    }

    // Fecha a conexão com o banco de dados
    $conexao->close();
}
?>
