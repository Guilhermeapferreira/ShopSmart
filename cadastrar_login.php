<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro do Login</title>
</head>
<body>
<?php            
    require "conexao.php"; //CHAMA O NEGÓCIO LÁ O BANCO DE DADOS

    $nome = filter_input(INPUT_POST, 'nome');
    $email = filter_input(INPUT_POST,'email');
    $senha = filter_input(INPUT_POST, 'senha');
    
    

    $sql = $conexao->prepare("INSERT INTO cadastro (nome, email, senha) VALUES (:nome, :email, :senha)");

    $sql->bindValue(':nome', $nome);
    $sql->bindValue(':email', $email);
    $sql->bindValue(':senha', $senha);
    
    $sql->Execute();
    echo "<script>alert('Login cadastrado com successo!');</script>";
    header("Location: cadastro.html");
    

?>
</body>
</html>