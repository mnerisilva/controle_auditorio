const _poltrona = document.querySelectorAll('.poltrona');

const _capacidade = document.querySelector('.capacidade');

const _zoom_button_mais = document.querySelector(".zoom-button-mais");
const _zoom_button_menos = document.querySelector(".zoom-button-menos");

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

let _cap = 0;
let _positiorX = 230;
console.log(_poltrona);

_capacidade.textContent = _cap;

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
})

_zoom_button_menos.addEventListener("click", function(){
    console.log('clicou no zoom');
    _svg.classList.remove("zoom-mais");
})

const _canvas = document.querySelector("#myCanvas");

const ctx = _canvas.getContext("2d");
_canvas.width = "300";
_canvas.height = "80";

_width = _canvas.width;
_height = _canvas.height;

/*ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.moveTo(20, 20);
ctx.lineTo(200, 20);
ctx.stroke();*/

ctx.fillStyle = "white";
ctx.font = '20px serif';     
ctx.fillText("CAPACIDADE:       ", 20, 30);
ctx.fillText("LOTAÇÃO ATUAL:    ", 20, 60);
ctx.fillText("39    ", 220, 30);


function getValue(radio) {
    console.log(radio.value);
    if(radio.value === "1"){_tipo = 1}
    if(radio.value === "2"){_tipo = 2}
    if(radio.value === "3"){_tipo = 3}
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

            //if(_tipo == 1){e.target.classList.add("")}
            console.log(_tipo);

            ctx.clearRect(0,0,600,600); 
            console.log(_width, _height);
        
            if(elemento.classList.contains('on')){
                if(_tipo == 1){e.target.classList.add('inteira');}
                if(_tipo == 2){e.target.classList.add('acessibilidade');}
                if(_tipo == 3){e.target.classList.add('estudante');}
                console.log('sim')
                _cap++
            }else if(!elemento.classList.contains('on')){
                e.target.classList.remove('inteira');
                e.target.classList.remove('acessibilidade');
                e.target.classList.remove('estudante');                
                console.log('não')
                _cap--
            }
                
            _capacidade.textContent = _cap;
        
            console.log(elemento);
            //console.log(e.pageX, e.pageY);
            console.log(e.pageX, e.pageY);
            console.log(e.offsetLeft, e.pageY);
            _modal.style.pageX = _body.pageX;
            _modal.style.pageY = _body.pageY;
            _modal.style.display = "block";    
            ctx.fillText("CAPACIDADE:       ", 20, 30);
            ctx.fillText("39    ", 220, 30);        
            ctx.fillText("LOTAÇÃO ATUAL: ", 20, 60);
            ctx.font = '26px serif';
            if(_cap.toString().length > 1){_positiorX = 210} 
            ctx.fillText(_cap, _positiorX, 60);
            ctx.font = '20px serif'; 

        }
    })

});
