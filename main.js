$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();

        const nomeNovaTarefa = $('#nome-tarefa').val();
        const novoItem = $('<li></li>');
        $(`<li>${nomeNovaTarefa}</li>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');

        $('li').click(function() {
            $(this).addClass('riscado');
        })

        $('#nome-tarefa').val('');
    })
})