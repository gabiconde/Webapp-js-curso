//iife
;(function(){
    const cartoes = document.querySelectorAll('.cartao');

    cartoes.forEach( cartao => {

        cartao.addEventListener('focusin', function(event){
            //callback
            this.classList.add('cartao--focado')
        })
        cartao.addEventListener('focusout', function(event){
            //callback
            this.classList.remove('cartao--focado')

        })

        cartao.addEventListener('change', function(event){
            const input = event.target
            const radio =  input.classList.contains('opcoesDoCartao-radioTipo')
            if (radio){
                cartao.style.backgroundColor = input.value
            }

        })

        cartao.addEventListener('keyup', function(event){
            const label = event.target
            if (label.classList.contains('opcoesDoCartao-tipo') && (event.code == 'Space' || event.code == 'Enter')){
                cartao.style.backgroundColor = label.style.color
                //event.target.click()
            }
        })

        cartao.addEventListener('click', function(event){
            
            if (event.target.classList.contains('opcoesDoCartao-remove')){
                cartao.classList.add('cartao--some')    
                cartao.addEventListener('transitioned', this.remove)
            }
        })
    })
})()
