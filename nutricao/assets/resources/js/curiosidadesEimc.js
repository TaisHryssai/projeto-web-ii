//PÁGINA CURIOSIDADES
//quando passado o mouse sobre a imagem aparece o texto
$(document).ready(function () {
    'use strict';
    $(".imagensCuriosidade").mouseenter(function () {
        $("#muda_pressao").text("Em um estudo, nos Estados Unidos , ofereceram de seis a oito unidades de batata roxa a 8 pessoas com sobrepeso e pressão alta duas vezes ao dia. Depois de um mês, eles notaram uma redução de 4,3% nos níveis da pressão diastólica e 3,5% da sistólica e ninguém engordou. O trabalho ajuda a quebrar o mito de que o alimento só causa ganho de peso.");
        $("#muda_vitamina").text("Estudo, na Suécia, revelou uma importante propriedade da vitamina C: ela dissolve placas amilóides, como são conhecidas as proteínas toxicas encontradas no cérebro de quem tem Alzheimer.");
        $("#muda_enxaqueca").text("Inclua o gengibre na sua alimentação, pois sua raiz bloqueia os efeitos das substâncias que inflamam os vasos sanguíneos no cérebro. Além disso, aumente o consumo de líquidos, pois a desidratação pode desencadear uma enxaqueca. Óleo de menta também pode aliviar a dor e as náuseas causadas pela enxaqueca.");
        $("#muda_vinho").text("Resveratrol, substância encontrada em abundancia no vinho tinto, é capaz de inibir a formação anormal de vasos sanguineos dos olhos , prevenindo a cegueira. Age impedindo a morte prematura de células e melhora a vascularização dos tecidos.");
        $("#muda_broto").text("Os brotos são uma nova tendência alimentar, a life food (comida viva), importada de Nova York por naturalistas e vegetarianos.Conservam mais nutrientes como vitaminas e minerais que garantem muito mais benefícios ao corpo. Exemplo de brotos: alfafa, feijão, girassol...");
        $("#muda_concentracao").text("Fortalece o sangue, a medula óssea e melhora as condições gerais (apetite e vigor físico). É antianêmica, protege o sistema nervoso de nefralgias e alivia a irritabilidade. Além de tudo isso, melhora a capacidade de concentração e memória. As fontes alimentares são: cereais integrais, ovos, leite e principalmente fígado.");
        $("#muda_mente").text("Estudo realizado pela Universidade Nacional de Cingapura revelou que o consumo diário de chá melhora a saúde mental dos idosos porque possui a propriedade de melhorar a capacidade cognitiva, prevenindo o mal de Alzheimer.");
        $("#muda_coracao").text("Um estudo da Universidade do Estado do Arizona, nos Estados Unidos, revelou que substâncias presentes nos cogumelos são capazes de inibir ou atenuar doenças cardiovasculares. Exemplos de cogumelos comestíveis são o champignon e o shitake. A dose recomendada para se obter este benefício é de meia xícara por dia.");
    });
});




document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    let elems = document.querySelectorAll('.materialboxed');
    let instances = M.Materialbox.init(elems, options);
});

// Or with jQuery

$(document).ready(function () {
    'use strict';
    $('.materialboxed').materialbox();
});

//PÁGINA IMC
//função anonima para calcular o imc pegando pelo id o valor digitado e colocando o calculo dentro de um input via getElementById
let calcularImc = function () {
    'use strict';
    let al = document.getElementById("altura").value;
    let p = document.getElementById("peso").value;
    let peso = p.replace(",",".");
    let altura = al.replace(",",".")
    let altura2 = (altura * altura);
    let imc = (peso / altura2);
    

    if (imc < 16.9) {
        document.getElementById("imc").innerHTML = imc.toFixed(2);
        document.querySelector('#clasPeso').textContent = 'Muito abaixo do peso';
    } else
    if (imc < 18.4) {
        document.getElementById("imc").innerHTML = imc.toFixed(2);
        document.querySelector('#clasPeso').textContent ='Abaixo do peso';
    } else
    if (imc < 24.9) {
        document.getElementById("imc").innerHTML = imc.toFixed(2);
        document.querySelector('#clasPeso').textContent ='Peso normal';
    } else
    if (imc < 29.9) {
        document.getElementById("imc").innerHTML = imc.toFixed(2);
        document.querySelector('#clasPeso').textContent ='Acima do peso';
    } else
    if (imc < 34.9) {
        document.getElementById("imc").innerHTML = imc.toFixed(2);
        document.querySelector('#clasPeso').textContent ='Obesidade Grau I';
    } else
    if (imc < 40) {
        document.getElementById("imc").innerHTML = imc.toFixed(2);
        document.querySelector('#clasPeso').textContent ='Obesidade Grau II';
    } else
    if (imc > 40) {
        document.getElementById("imc").innerHTML = imc.toFixed(2);
        document.querySelector('#clasPeso').textContent ='Obesidade Grau III';
    }
}
calcularImc();
// muda a cor do campo quando clicado nele
function mudaCor(cor) {
    'use strict';
    cor.style.background = '#bbdefb';
}
 
