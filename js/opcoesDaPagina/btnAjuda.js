;(function(){
    const button = document.querySelector('#btnAjuda')
    button.classList.remove('no-js')

    button.addEventListener('click', function(event){
        let lista = ['ajuda1','ajuda2', 'ajuda3','ajuda4']
        /* lista.forEach((help)=>{
            console.log(help)
        }) */
        let cartoes = []

        for(let a of lista){
            cartoes.push(criaCartao(a))
        }

    })
})()