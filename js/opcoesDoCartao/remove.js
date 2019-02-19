
/* 
function remover(){
 cartao.classList.r

} */

//IIFE 
// Immediately Invoked Function Expression
;(function(){
    const botao = document.querySelectorAll('.opcoesDoCartao-remove')

    botao.forEach(element => {
            console.log(element)
            
            element.addEventListener('click', function(){
        
                const cartao = element.parentElement.parentElement;
                cartao.classList.add('cartao--some')
                /*         setTimeout(function(){
                            cartao.remove()
                        },500) */
                cartao.addEventListener('transitionend',this.remove)
            })
        
    })


})()

// clicar adc class botao--some e dps remover botao