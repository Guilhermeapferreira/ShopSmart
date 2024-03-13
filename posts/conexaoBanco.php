<?php
$host = "localhost"; // Endereço do servidor
$usuario = "seu_usuario"; // Nome de usuário do banco de dados
$senha = "sua_senha"; // Senha do banco de dados
$banco = "seu_banco"; // Nome do banco de dados

// Conexão com o banco de dados
$conexao = new mysqli($host, $usuario, $senha, $banco);

// Verifica a conexão
if ($conexao->connect_error) {
    die("Falha na conexão com o banco de dados: " . $conexao->connect_error);
}
?>
