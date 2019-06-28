//Vetor de murais
let mensagens = [];

 
var Mensagem = function (frase, data,nome) {
    'use strict';
    this.frase = frase;
    this.data = data;
    this.nome = nome;
}

let campoMural = document.getElementsByName('mensagem')[0];
let campoNome = document.getElementById("nome");

campoMural.addEventListener('keypress', function (e) {
    'use strict';
    let letra = e.charCode;
    if (!(letra >= 65 && letra <= 90 ||
        letra >= 97 && letra <= 122 ||
        letra == 32 ||
        letra >= 48 && letra <= 57 ||
        e.keyCode == 8 ||
        letra == 33 ||
        letra == 58 ||
        letra == 59 ||
        letra == 39 ||
        letra == 44 ||
        letra == 46 ||
        letra >= 224 && letra <= 246 ||
        letra >= 249 && letra <= 252)) {
        e.preventDefault();
    }
});

function corAleatoria() {
    'use strict';
  let rnd = Math.ceil((Math.random() * 14));

    switch (rnd) {
        case 1:
            return 'red lighten-4';
        case 2:
            return 'purple lighten-4';
        case 3:
            return 'blue lighten-4';
        case 4:
            return 'indigo lighten-4';
        case 5:
            return 'lime lighten-4';
        case 6:
            return 'cyan lighten-4';
        default:
            return 'white';
    }
}

function adicionarMensagem(index) {
    'use strict';
    let frase = campoMural.value;

    $('.mural').append("<div class='col s12 z-depth-5 flow-text mural-frases " + corAleatoria() + " black-text'><small> " + mensagens[index].nome + " "+ mensagens[index].data+ "</small><h4>" + mensagens[index].frase + "</h4></div>");

}

//for in
function formarMural() {
    'use strict';
    for (let i in mensagens) {
        adicionarMensagem(i);
    }
}

function salvar() {
    'use strict';
    localStorage.setItem('mensagens', JSON.stringify(mensagens));
}

function atualizarDados() {
    'use strict';
    let arrayExterno = JSON.parse(localStorage.getItem('mensagens'))
    for (let i in arrayExterno) {
        mensagens[i] = arrayExterno[i];
    }
}

function removerDados() {
    'use strict';
    localStorage.removeItem('mensagens');
}

function postar() {
    'use strict';
    let texto = campoMural.value;
    let nome = campoNome.value;
    let d = new Date();
    let postarData = `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

    let mensagem = new Mensagem(texto, postarData, nome.toUpperCase());

    if (confirm('Tem certeza que deseja postar essa mensagem?')) {
        mensagens.push(mensagem);

        salvar();

        atualizarDados();
        adicionarMensagem(mensagens.length - 1);
    }

    return false;
}

function iniciar() {
    'use strict';
    atualizarDados();
    formarMural();
}

let mudaLetra = function (x) {
    'use strict';
    x = document.getElementsByTagName("input")[1];
    x.value = x.value.toUpperCase();
};
mudaLetra();