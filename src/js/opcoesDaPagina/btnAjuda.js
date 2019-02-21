;(function(){
    const button = document.querySelector('#btnAjuda')
    button.classList.remove('no-js')

    button.addEventListener('click', function(event){
        let lista = 
        [{
            conteudo : 'Ajuda1',
            cor: 'silver'
        },
        {
            conteudo : 'Ajuda2',
            cor: 'orange'
        },
        {
            conteudo : 'Ajuda3',
            cor: 'pink'
        },
        {
            conteudo : 'Ajuda4',
            cor: 'purple'
        }]

        /* lista.forEach((help)=>{
            console.log(help)
        }) */
        let cartoes = []

        for(let a of lista){
            cartoes.push(criaCartao(a))
        }

    })
})()