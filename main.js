const form = document.getElementById('form-emprestimo');
const nomeCompleto = document.getElementById('nome-Completo');
const mensagemSucesso = document.getElementById('mensagem-Sucesso');
let formEValido = false

function validaNome(nomeCompleto) {
    const nomecomoArray = nomeCompleto.split(' ');
    return nomecomoArray.length >= 2;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const numeroConta = document.getElementById('numero-Conta');
    const valorEmprestimo = document.getElementById('valor-emprestimo');
    const mensagemSucesso = `O valor de: <b>${valorEmprestimo.value}</b> Foi adicionado a sua conta!! <b>${nomeCompleto}</b> - conta <b>${numeroConta}</b>`;

    formEValido = validaNome(nomeCompleto.value)
    if (formEValido) {
        const mensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHtml = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        nomeCompleto.value = '';
        numeroConta.value = '';
        valorEmprestimo.value = '';
    } else {
        nomeCompleto.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
})

nomeCompleto.addEventListener('keyup', function(e) {
        console.log(e.target.value);
        formEValido = validaNome(e.target.value);
    
        if (!formEValido) {
            nomeCompleto.classList.add('error');
            document.querySelector('.error-message').style.display = 'block';
        } else {
            nomeCompleto.classList.remove('error');
            document.querySelector('.error-message').style.display = 'none';
        }
    })

    