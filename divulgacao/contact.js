document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o formulário de contato
    const form = document.getElementById('contactForm');

    // Adiciona um evento de envio ao formulário
    form.addEventListener('submit', function(event) {
        // Impede o comportamento padrão de envio do formulário
        event.preventDefault();

        // Obtém os dados do formulário
        const formData = new FormData(form);

        // Simula o envio dos dados (substitua esta parte pelo código PHP para processar o formulário)
        // Aqui você pode enviar os dados do formulário para o banco de dados usando PHP e MySQL
        // Após o envio bem-sucedido, você pode redirecionar o usuário para a nova página

        // Redireciona o usuário para a nova página
        window.location.href = 'contact.html'; // Substitua 'obrigado.html' pelo nome da sua nova página
    });
});
