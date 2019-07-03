//PÁGINA DICAS NUTRICIONAIS
// intervalo de tempo usando arrow function
function dicas() {
    'use strict';
    setTimeout(() => {
        alert("Mais dúvidas entre em contato conosco. ");
    }, 4000);
}

function receitas() {
    'use strict';
    setInterval(function () {
        var men = confirm("Deseja receber dicas nutricionais? ");
        if (men == true) {
            var email = prompt("Digite seu email: ");
            alert("Email " + email + " cadastrado com sucesso!");
        } else
        if (men == false)
            return false;

    }, 10000);

}

//PÁGINA RECEITAS 
// Utilizando de JQuery
$(document).ready(function () {
    'use strict';
    $("#flip").click(function () {
        $("#ingredientes").slideToggle();
        $("#modo").slideToggle();
    });
});
$(document).ready(function () {
    'use strict';
    $("#flipL").click(function () {
        $("#lasanha").slideToggle();
        $("#modoL").slideToggle();
    });
});
$(document).ready(function () {
    'use strict';
    $("#flipQ").click(function () {
        $("#quibe").slideToggle();
        $("#modoQ").slideToggle();
    });
});
$(document).ready(function () {
    'use strict';
    $("#flipT").click(function () {
        $("#torta").slideToggle();
        $("#modoT").slideToggle();
    });
});
$(document).ready(function () {
    'use strict';
    $("#flipC").click(function () {
        $("#cookie").slideToggle();
        $("#modoC").slideToggle();
    });
});
$(document).ready(function () {
    'use strict';
    $("#flipB").click(function () {
        $("#banana").slideToggle();
        $("#modoB").slideToggle();
    });
});
$(document).ready(function () {
    'use strict';
    $("#flipA").click(function () {
        $("#abacaxi").slideToggle();
        $("#modoA").slideToggle();
    });
});
$(document).ready(function () {
    'use strict';
    $("#flipBC").click(function () {
        $("#brownie").slideToggle();
        $("#modoBC").slideToggle();
    });
});
$(document).ready(function () {
    'use strict';
    $("#flipTL").click(function () {
        $("#limao").slideToggle();
        $("#modoTL").slideToggle();
    });
});
$(document).ready(function () {
    'use strict';
    $("#flipCoco").click(function () {
        $("#coco").slideToggle();
        $("#modoCoco").slideToggle();
    });
});
$(document).ready(function () {
    'use strict';
    $("#flipBM").click(function () {
        $("#milho").slideToggle();
        $("#modoBM").slideToggle();
    });
});
$(document).ready(function () {
    'use strict';
    $("#flipBA").click(function () {
        $("#aveia").slideToggle();
        $("#modoBA").slideToggle();
    });
});
