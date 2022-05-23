const _poltrona = document.querySelectorAll('.poltrona');

const _capacidade = document.querySelector('.capacidade');

let _cap = 0;
console.log(_poltrona);

_capacidade.textContent = _cap;

const _svg = document.querySelector('svg');
console.log(_svg);
console.log(_svg.getAttribute('width'));



_poltrona.forEach((conteudo, item) => {
    console.log(conteudo, item)

    conteudo.addEventListener('mousedown', function(e){
        console.log(e.buttons);
        let elemento = e.target;
    
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
    })

});
