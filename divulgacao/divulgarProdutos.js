document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Validar campos antes de enviar o formulário
        const nome = document.getElementById('nome').value.trim();
        const descricao = document.getElementById('descricao').value.trim();
        const preco = document.getElementById('preco').value.trim();
        const email = document.getElementById('email').value.trim();
        const imagem = document.getElementById('imagem').value.trim();

        if (nome === '' || descricao === '' || preco === '' || email === '' || imagem === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // Se todos os campos estiverem preenchidos, enviar o formulário
        form.submit();
    });
});
