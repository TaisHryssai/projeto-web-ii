$(function () {
    'use strict';
    $("#btn-enviar").click(erro);   

});

function enviarDados(){
    'use strict';
    let parametros = {
        nome: "Enviado com sucesso"
    }
    var servico = "http://localhost:3000/process_post";
    $.post(servico, parametros, function (data) {
        'use strict';
        console.log(data);
       
       
    });
}

function erro() {
    'use strict';
    let servico = "http://localhost:3000/error";
    $.get(servico)
        .done(function (data) {
            $("#meuSpan").text(data);
        })
        .fail(function (data) {
            $("#meuSpan").text(data.responseText);
        });
}