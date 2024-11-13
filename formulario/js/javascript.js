document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('#cadastroForm').addEventListener('submit', function (event) {
        event.preventDefault();

        let nome = document.getElementById('nome').value;
        let email = document.getElementById('email').value;
        let senha = document.getElementById('senha').value;
        let confirmacaoSenha = document.getElementById('confirmacao_senha').value;


        if (!nome || !email || !senha || !confirmacaoSenha) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        if (senha !== confirmacaoSenha) {
            alert('As senhas não coincidem. Por favor, tente novamente.');
            return;
        }

        if (!validarEmail(email)) {
            alert('Por favor, insira um e-mail válido.');
            return;
        }

        document.getElementById('formContainer').style.display = 'none';
        document.getElementById('successMessage').style.display = 'block';

        this.reset();
    });

    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

});
