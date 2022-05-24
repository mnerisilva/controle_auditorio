const _poltrona = document.querySelectorAll('.poltrona');

const _capacidade = document.querySelector('.capacidade');

let _cap = 0;
console.log(_poltrona);

_capacidade.textContent = _cap;

const _body = document.querySelector('body');
const _modal = document.querySelector('.modal');
const _svg = document.querySelector('svg');
const _score = document.querySelector('.score');
_score.style.display = "none";
console.log(_svg);
console.log(_svg.getAttribute('width'));


const _canvas = document.querySelector("#myCanvas");

const ctx = _canvas.getContext("2d");
_canvas.width = "190";
_canvas.height = "60";

_width = _canvas.width;
_height = _canvas.height;

/*ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.moveTo(20, 20);
ctx.lineTo(200, 20);
ctx.stroke();*/

ctx.fillStyle = "brown";
ctx.font = '20px serif';     
ctx.fillText("COTAÇÃO: ", 10, 30);





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
            e.target.classList.toggle("ativa")

            ctx.clearRect(0,0,600,600); 
            console.log(_width, _height);
        
            if(elemento.classList.contains('ativa')){
                console.log('sim')
                _cap++
            }else {
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
            ctx.fillText("COTAÇÃO: ", 10, 30);
            ctx.font = '26px serif'; 
            ctx.fillText(_cap, 150, 30);
            ctx.font = '20px serif'; 

        }
    })

});
