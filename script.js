const _container = document.querySelector('.container');

const _wrapper = document.querySelector('.wrapper');

const _img_lotacao = document.querySelector('.img-lotacao img');

const _lotacao_icon = document.querySelector(".lotacao-icon i");

const _input_inteira = document.querySelector("#inteira");

_input_inteira.setAttribute('checked', true);

const _poltrona = document.querySelectorAll('.poltrona');

const _capacidade = document.querySelector('.capacidade');

const _zoom_button_mais = document.querySelector(".zoom-button-mais");

const _zoom_button_menos = document.querySelector(".zoom-button-menos");

const _myCanvas = document.querySelector(".myCanvas");

const _config = document.querySelector(".config");

const _svg = document.querySelector("svg");

const _capacidade_total = document.querySelector('table .cap-tot');

const _capacidade_atual = document.querySelector('table .cap-atu span');

const _percentual_lotAtual = document.querySelector('table .perc-lotacao');

const _percentual_acessi = document.querySelector('table .percentual-acessi');

const _percentual_cortesia = document.querySelector('table .percentual-cortesia');

const _percentual_distan = document.querySelector('table .percentual-distan');

const _percentual_inteira = document.querySelector('table .percentual-inteira');

const _percentual_meia = document.querySelector('table .percentual-meia');

const _cont_inteira = document.querySelector('table .cont-inteira');

const _cont_acessi = document.querySelector('table .cont-acessi');

const _cont_cortesia = document.querySelector('table .cont-cortesia');

const _cont_meia = document.querySelector('table .cont-meia');

const _cont_distan = document.querySelector('table .cont-distan');

setTimeout(function(){    
    _myCanvas.classList.add('fade-out');
} , 600);

setTimeout(function(){    
    _config.classList.add('fade-out');
} , 1000);

setTimeout(function(){    
    _svg.classList.add('fade-out');
} , 1200);



const _descricao_lotacao = document.querySelector('.descricao-lotacao');

const arrIdPoltronas = [,"costas_p01", "costas_p02", "costas_p03", "costas_p04", "costas_p05", "costas_p06", "costas_p07", "costas_p08", "costas_p09", "costas_p10", "costas_p11", "costas_p12", "costas_p13", "costas_p14", "costas_p15", "costas_p16", "costas_p17", "costas_p18", "costas_p19", "costas_p20", "costas_p21", "costas_p22", "costas_p23", "costas_p24", "costas_p25", "costas_p26", "costas_p27", "costas_p28", "costas_p29", "costas_p30", "costas_p31", "costas_p32", "costas_p33", "costas_p34", "costas_p35", "costas_p36", "costas_p37", "costas_p38", "costas_p39"];

arrIdPoltronas.map((item, index) => {
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

_capacidade.textContent = _lotAtual;

const _body = document.querySelector('body');
const _modal = document.querySelector('.modal');
const _score = document.querySelector('.score');
_score.style.display = "none";

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

function getValue(radio) {
    console.log('ONCHANGE: '+radio.value);
    if(radio.value === "1"){_tipo = 1; radio.parentNode.style.backgroundColor = "antiquewhite"}
    if(radio.value === "2"){_tipo = 2}
    if(radio.value === "3"){_tipo = 3}
    if(radio.value === "4"){_tipo = 4}
    if(radio.value === "5"){_tipo = 5}
}



// desabilita menu de contexto do elemento svg
        _wrapper.addEventListener('contextmenu', e => {
        e.preventDefault();
        });
//


_poltrona.forEach((conteudo, item) => {

    conteudo.addEventListener('mousedown', function(e){
        console.log(e.buttons);
        let elemento = e.target;
        if(e.buttons === 1){ // somente qdo for clicado o botão esquerdo do mouse
            e.target.classList.toggle("on")

            
            console.log(_tipo);
        
            if(elemento.classList.contains('on')){
                if(_tipo === 1){e.target.classList.add('inteira'); _int++; console.log(_int)}
                if(_tipo === 2){e.target.classList.add('acessibilidade'); _ace++}
                if(_tipo === 3){e.target.classList.add('meia'); _mei++}
                if(_tipo === 4){e.target.classList.add('distanciamento'); _dis++}
                if(_tipo === 5){e.target.classList.add('cortesia'); _cor++}
                console.log('sim')
                _lotAtual++
            }else {
                if(_tipo === 1){
                    e.target.classList.remove('acessibilidade');
                    e.target.classList.remove('cortesia');
                    e.target.classList.remove('distanciamento');
                    e.target.classList.remove('inteira');
                    e.target.classList.remove('meia');
                    _int--;
                } else if(_tipo === 2){
                    e.target.classList.remove('acessibilidade');
                    e.target.classList.remove('cortesia');
                    e.target.classList.remove('distanciamento');
                    e.target.classList.remove('inteira');
                    e.target.classList.remove('meia');
                    _ace--;
                } else if(_tipo === 3){
                    e.target.classList.remove('acessibilidade');
                    e.target.classList.remove('cortesia');
                    e.target.classList.remove('distanciamento');
                    e.target.classList.remove('inteira');
                    e.target.classList.remove('meia');
                    _mei--;
                } else if(_tipo === 4){
                    e.target.classList.remove('acessibilidade');
                    e.target.classList.remove('cortesia');
                    e.target.classList.remove('distanciamento');
                    e.target.classList.remove('inteira');
                    e.target.classList.remove('meia');
                    _dis--;
                } else if(_tipo === 5){
                    e.target.classList.remove('acessibilidade');
                    e.target.classList.remove('cortesia');
                    e.target.classList.remove('distanciamento');
                    e.target.classList.remove('inteira');
                    e.target.classList.remove('meia');
                    _cor--;
                }               
                console.log('não')
                _lotAtual--
            }
                
            _capacidade.textContent = _lotAtual;
            _img_lotacao.classList.add('mostra-spinner');
            _percentual_lotAtual.classList.add("negrito");
            _capacidade_atual.classList.add("negrito");
            _descricao_lotacao.classList.add("black");
            _lotacao_icon.classList.add("black");
            setTimeout(function(){
                _img_lotacao.classList.remove('mostra-spinner'); 
                _percentual_lotAtual.classList.remove("negrito");
                _capacidade_atual.classList.remove("negrito");
                _descricao_lotacao.classList.remove("black");
                _lotacao_icon.classList.remove("black");
            },800);
        
            _modal.style.pageX = _body.pageX;
            _modal.style.pageY = _body.pageY;
            _modal.style.display = "block";    

            _capacidade_atual.textContent = _lotAtual;
            _cont_acessi.textContent = _ace;
            _cont_cortesia.textContent = _cor;
            _cont_distan.textContent = _dis;
            _cont_inteira.textContent = _int;
            _cont_meia.textContent = _mei;
            console.log('valores: '+_capTotal, _lotAtual);
            _percentual_acessi.textContent = `${Math.trunc((_ace*100) / _capTotal)}`;
            _percentual_cortesia.textContent = `${Math.trunc((_cor*100) / _capTotal)}`;
            _percentual_distan.textContent = `${Math.trunc((_dis*100) / _capTotal)}`;
            _percentual_inteira.textContent = `${Math.trunc((_int*100) / _capTotal)}`;
            _percentual_meia.textContent = `${Math.trunc((_mei*100) / _capTotal)}`;
            _percentual_lotAtual.textContent = `${Math.trunc((_lotAtual*100) / _capTotal)}`;

        }
    })

});


