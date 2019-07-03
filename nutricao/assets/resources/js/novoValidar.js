(function () {
    'use strict';
    let $id = function (id) {
        return document.getElementById(id);
    };

 
    document.querySelector('#btn-enviar').onclick = function () {
        let nome = form.nome.value;
        let email = form.email.value;
        let mensagem = form.mensagens.value;
        let telefone = form.telefone.value;
        
        
        $id('nome').onblur = function () {
            if (!this.validity.valid) {
                this.setCustomValidity("Campo não pode estar vazio!!");
            }
        };
        $id('nome').onfocus = function () {
            this.setCustomValidity("");
            form.nome.focus();
            return false;
        };

        $id('telefone').onblur = function () {
            if (!this.validity.valid) {
                this.setCustomValidity("Campo não pode estar vazio!!");
            }
        };
        $id('telefone').onfocus = function () {
            this.setCustomValidity("");
            form.telefone.focus();
            return false;
        };

        $id('email').onblur = function () {
            if (!this.validity.valid) {
                this.setCustomValidity("Insira um email válido!!");
            }
        };

        $id('email').onfocus = function () {
            this.setCustomValidity("");
            form.email.focus();
            return false;
        };

        $id('mensagem').onblur = function () {
            if (!this.validity.valid) {
                this.setCustomValidity("Campo não pode estar vazio!!");
            }
        };

        $id('mensagem').onfocus = function () {
            this.setCustomValidity("");
            form.mensagem.focus();
            return false;
        };

    };
})();

/*Mascara jquery */
$(document).ready(function () {
    'use strict';
    $("#telefone").mask("(00)0000-0000");
});



