// carrossel da página//
$(document).ready(function () {
    'use strict';
    $('.sidenav').sidenav();
});

$(document).ready(function () {
    'use strict';
    $(".dropdown-trigger").dropdown();
});

$(document).ready(function () {
    'use strict';
    $('.carousel').carousel();
});

//quando passar o mouse em cima mudar cores
//JQUERY

$('section>h5').css('color', '#1565c0');
$(document).ready(function () {
    'use strict';
    $(".verdade").mouseover(function () {
        $(".verdade").css("color", "green");
    });
});
$(document).ready(function () {
    'use strict';
    $(".mito").mouseover(function () {
        $(".mito").css("color", "red");
    });
});

//EFEITO FADE
$('#imgPiramide').mouseenter(function(){
    'use strict';
    $('#imgPiramide').fadeOut();
});
$('#mostraImg').mouseenter(function(){
    'use strict';
    $('#imgPiramide').fadeIn();
});

function mensagem() {
    'use strict';
    let men = confirm("Deseja receber dicas nutricionais? ");
    if (men == true) {
        var email = prompt("Digite seu email: ");
        alert(`Email  ${email}  cadastrado com sucesso!`);
    } else
        if (men == false)
            return false;

} 
