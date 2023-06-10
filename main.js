const form = document.getElementById('valid-form');
let form_valido = false
const valorA = document.getElementById('campo_a');
const valorB = document.getElementById('campo_b');

function valida_valor(valorA, valorB){
    return valorB > valorA;
};

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const container_mensagem_sucesso = document.querySelector(`.success-message`);
    const container_mensagem_erro = document.querySelector(`.error-message`);

    const valorA = parseFloat(document.getElementById('campo_a').value);
    const valorB = parseFloat(document.getElementById('campo_b').value);

    const mensagem_sucesso = `Formulário enviado com sucesso. Parabéns!`;
    const mensagem_erro = `Formulário não enviado, campo B precisa ter um valor maior que o campo A`;

    form_valido = valida_valor(valorA, valorB);

    container_mensagem_sucesso.innerHTML = '';
    container_mensagem_erro.innerHTML = '';
    container_mensagem_sucesso.style.display = 'none';
    container_mensagem_erro.style.display = 'none';

    if (form_valido){
        container_mensagem_sucesso.innerHTML = mensagem_sucesso;
        container_mensagem_sucesso.style.display = 'block';

        campo_a.value = '';
        campo_b.value = '';
    } else{
        container_mensagem_erro.innerHTML = mensagem_erro;
        container_mensagem_erro.style.display = 'block';

        campo_a.value = '';
        campo_b.value = '';
    }
})
