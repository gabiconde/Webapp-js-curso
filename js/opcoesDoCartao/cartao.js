//iife
;(function(){
    const cartoes = document.querySelectorAll('.cartao');

    cartoes.forEach( cartao => {
        console.log(cartao)
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
    })
})()