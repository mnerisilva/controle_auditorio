const _poltrona = document.querySelectorAll('.poltrona');

const _capacidade = document.querySelector('.capacidade');

let _cap = 0;
console.log(_poltrona);

_capacidade.textContent = _cap;

const _body = document.querySelector('body');
const _modal = document.querySelector('.modal');
const _svg = document.querySelector('svg');
console.log(_svg);
console.log(_svg.getAttribute('width'));

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

        }
    })

});
