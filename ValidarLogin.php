<?php
        echo "<h3>VERIFICAÇÃO DO LOGIN</h3>";
        $nome = filter_input(INPUT_POST, 'usuario');
        $senha = filter_input(INPUT_POST, 'senha');

        require "conexao.php"; // Certifique-se de que este é o arquivo que contém a instância do PDO

        $query = "SELECT * FROM cadastro WHERE nome = :nome AND senha = :senha";
        $stmt = $conexao->prepare($query);

        $stmt->bindParam(':nome', $nome, PDO::PARAM_STR);
        $stmt->bindParam(':senha', $senha, PDO::PARAM_STR);

        $stmt->execute();
        $resultado = $stmt->fetchAll(); // Pega todos os resultados

        if (count($resultado) == 0) {
            echo "<p>Usuário ou Senha Inválida</p>";
            echo "<p align='center'><a href='login.html'>Efetuar Login</p>";
        } else {
            session_start();
            $_SESSION["usuario"] = $usuario;
            header("location: paginainicial/paginaPrincipal.html"); // Carrega a página principal
            exit; // É uma boa prática chamar exit após redirecionamentos
        }
    ?>