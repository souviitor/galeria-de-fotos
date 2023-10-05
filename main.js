$(document).ready(function () {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#btncancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display: none"></li>')
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blanck" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
            
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#endereco-imagem-nova').val('')
    })
})

/*  O CAMINHO DO jQuery é menor e muito mais facil de fazer
    utilizando o jquery 
    $('header button')

    utilizando o javaScript 
    document.querySelector('header button')
*/