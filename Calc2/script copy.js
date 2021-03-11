'use strict';
let novoNumero = true;
const botoes = document.querySelectorAll('[id^=tecla]');
const operadores = document.querySelectorAll('[id^=operador]');
const visor = document.getElementById('display');

let operador;
let numeroAnterior;
let numeroAtual;

botoes.forEach(botao => botao.addEventListener('click', function() {
        atualizaVisor(this.value);
}));

operadores.forEach(operador => operador.addEventListener('click', function(){
        selecionaOperador(this.value);
}));


function atualizaVisor(valor) {
        if(novoNumero){
                novoNumero = false;
                visor.innerText = parseFloat(valor);
        } else {
                visor.innerText += parseFloat(valor);
        }
        

}

function selecionaOperador(operadorSelecionado) {
        if(operacaoPendente){
                calcula(operadorSelecionado, numeroAnterior,numeroAtual)
        } else{


        
        
        if(!novoNumero){
        novoNumero = true;
        operador = operadorSelecionado;
        numeroAnterior = parseFloat(visor.textContent);
        
        } 
}
}