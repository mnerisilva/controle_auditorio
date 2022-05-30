
const _container = document.querySelector('.container');

const _img_lotacao = document.querySelector('.img-lotacao img');





const _poltrona = document.querySelectorAll('.poltrona');

const _capacidade = document.querySelector('.capacidade');

const _zoom_button_mais = document.querySelector(".zoom-button-mais");
const _zoom_button_menos = document.querySelector(".zoom-button-menos");

const _myCanvas = document.querySelector(".myCanvas");

const _capacidade_total = document.querySelector('table .cap-tot');
const _capacidade_atual = document.querySelector('table .cap-atu span');
const _percentual_lotAtual = document.querySelector('table .perc-lotacao');
const _percentual_acessi = document.querySelector('table .perc-acessi .percentual-acessi');
const _percentual_distan = document.querySelector('table .percentual-distan');
const _percentual_inteira = document.querySelector('table .percentual-inteira');
const _cont_inteira = document.querySelector('table .cont-inteira');
const _cont_acessi = document.querySelector('table .cont-acessi');
const _cont_distan = document.querySelector('table .cont-distan');

const arrIdPoltronas = [,"costas_p01", "costas_p02", "costas_p03", "costas_p04", "costas_p05", "costas_p06", "costas_p07", "costas_p08", "costas_p09", "costas_p10", "costas_p11", "costas_p12", "costas_p13", "costas_p14", "costas_p15", "costas_p16", "costas_p17", "costas_p18", "costas_p19", "costas_p20", "costas_p21", "costas_p22", "costas_p23", "costas_p24", "costas_p25", "costas_p26", "costas_p27", "costas_p28", "costas_p29", "costas_p30", "costas_p31", "costas_p32", "costas_p33", "costas_p34", "costas_p35", "costas_p36", "costas_p37", "costas_p38", "costas_p39"];

arrIdPoltronas.map((item, index) => {
    console.log(index, item);
    let id = '#'+item;
        let __poltrona = document.querySelector(id);
        __poltrona.classList.add("green");
    setTimeout(function(){   
        __poltrona.classList.remove("green");     
    }, 800);
})

let _lotAtual = 0;
let _capTotal = 39;

let perc_lotAtual = 80;

_capacidade_total.textContent = _capTotal;

let _ace = 0;
let _cor = 0;
let _dis = 0;
let _int = 0;
let _mei = 0;

let _positiorX = 230;
console.log(_poltrona);

_capacidade.textContent = _lotAtual;

const _body = document.querySelector('body');
const _modal = document.querySelector('.modal');
const _svg = document.querySelector('svg');
const _score = document.querySelector('.score');
_score.style.display = "none";
console.log(_svg);
console.log(_svg.getAttribute('width'));

let _tipo = 1;

_zoom_button_mais.addEventListener("click", function(){
    console.log('clicou no zoom');
    _svg.classList.add("zoom-mais");
    _myCanvas.style.backgroundColor = "white";
})

_zoom_button_menos.addEventListener("click", function(){
    console.log('clicou no zoom');
    _svg.classList.remove("zoom-mais");
})

const _canvas = document.querySelector("#myCanvas");

/*const ctx = _canvas.getContext("2d");
_canvas.width = "300";
_canvas.height = "240";*/

/*_width = _canvas.width;
_height = _canvas.height;*/

/*ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.moveTo(20, 20);
ctx.lineTo(200, 20);
ctx.stroke();*/

/*ctx.fillStyle = "white";
ctx.font = '20px serif';     
ctx.fillText("CAPACIDADE TOTAL:", 20, 30);
ctx.fillText("LOTAÇÃO ATUAL:", 20, 60);
ctx.fillText("39", 240, 30);  
ctx.fillText("ACESSIBILIDADE:", 20, 93);
ctx.fillText("DISTANCIAMENTO:", 20, 123);
ctx.fillText("CORTESIA:", 20, 150);
ctx.fillText("INTEIRA:", 20, 178);
ctx.fillText("MEIA ENTRADA:", 20, 204);*/


function getValue(radio) {
    console.log(radio.value);
    if(radio.value === "1"){_tipo = 1}
    if(radio.value === "2"){_tipo = 2}
    if(radio.value === "3"){_tipo = 3}
    if(radio.value === "4"){_tipo = 4}
}



// desabilita menu de contexto do elemento svg
        _svg.addEventListener('contextmenu', e => {
        e.preventDefault();
        });
//


_poltrona.forEach((conteudo, item) => {
    console.log(conteudo, item)

    conteudo.addEventListener('mousedown', function(e){
        console.log(e.buttons);
        let elemento = e.target;
        if(e.buttons === 1){ // somente qdo for clicado o botão esquerdo do mouse
            e.target.classList.toggle("on")

            
            console.log(_tipo);

            //ctx.clearRect(0,0,600,600); 
            //console.log(_width, _height);
        
            if(elemento.classList.contains('on')){
                if(_tipo == 1){e.target.classList.add('inteira'); _int++; console.log(_int)}
                if(_tipo == 2){e.target.classList.add('acessibilidade'); _ace++}
                if(_tipo == 3){e.target.classList.add('estudante'); _est++}
                if(_tipo == 4){e.target.classList.add('distanciamento'); _dis++}
                console.log('sim')
                _lotAtual++
            }else /*if(!elemento.classList.contains('on'))*/{
                if(_tipo === 1){
                    e.target.classList.remove('inteira');
                    e.target.classList.remove('acessibilidade');
                    e.target.classList.remove('estudante');
                    e.target.classList.remove('distanciamento');
                    _int--;
                } else if(_tipo === 2){
                    e.target.classList.remove('inteira');
                    e.target.classList.remove('acessibilidade');
                    e.target.classList.remove('estudante');
                    e.target.classList.remove('distanciamento');
                    _ace--;
                } else if(_tipo === 3){
                    e.target.classList.remove('inteira');
                    e.target.classList.remove('acessibilidade');
                    e.target.classList.remove('estudante');
                    e.target.classList.remove('distanciamento');
                    _est--;
                } else if(_tipo === 4){
                    e.target.classList.remove('inteira');
                    e.target.classList.remove('acessibilidade');
                    e.target.classList.remove('estudante');
                    e.target.classList.remove('distanciamento');
                    _dis--;
                }               
                console.log('não')
                _lotAtual--
            }
                
            _capacidade.textContent = _lotAtual;
            _img_lotacao.classList.add('mostra-spinner');
            setTimeout(function(){
                _img_lotacao.classList.remove('mostra-spinner');                
            },800);
        
            console.log(elemento);
            console.log(e.pageX, e.pageY);
            console.log(e.offsetLeft, e.pageY);
            _modal.style.pageX = _body.pageX;
            _modal.style.pageY = _body.pageY;
            _modal.style.display = "block";    
            //ctx.fillText("CAPACIDADE TOTAL:       ", 20, 30);
            //ctx.fillText("39    ", 240, 30);        
            //ctx.fillText("LOTAÇÃO ATUAL: ", 20, 60);
            //ctx.font = '26px serif';
            //if(_lotAtual.toString().length > 1){_positiorX = 210} 
            //ctx.fillText(_lotAtual, _positiorX, 60);
            //ctx.font = '20px serif'; 
            //ctx.fillText("ACESSIBILIDADE:", 20, 93);
            //ctx.fillText(_ace, 240, 93);      
            //ctx.fillText("DISTANCIAMENTO:", 20, 123);
            //ctx.fillText("CORTESIA:", 20, 150);
            //ctx.fillText("INTEIRA:", 20, 178);
            //ctx.fillText(_int, 240, 178);        
            //ctx.fillText("MEIA ENTRADA:", 20, 204);
            _capacidade_atual.textContent = _lotAtual;
            _cont_inteira.textContent = _int;
            _cont_acessi.textContent = _ace;
            _cont_distan.textContent = _dis;
            //_percentual_lotAtual.textContent = `${perc_lotAtual}`;
            console.log('valores: '+_capTotal, _lotAtual);
            _percentual_acessi.textContent = `${Math.trunc((_ace*100) / _capTotal)}`;
            _percentual_distan.textContent = `${Math.trunc((_dis*100) / _capTotal)}`;
            _percentual_inteira.textContent = `${Math.trunc((_int*100) / _capTotal)}`;
            _percentual_lotAtual.textContent = `${Math.trunc((_lotAtual*100) / _capTotal)}`;

        }
    })

});


