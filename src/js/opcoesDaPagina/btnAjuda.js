;(function(){
    const button = document.querySelector('#btnAjuda')
    button.classList.remove('no-js')

    button.addEventListener('click', function(event){
        
        const req = new XMLHttpRequest()
        req.open('GET', 'https://ceep.herokuapp.com/cartoes/instrucoes');
        req.responseType = 'json'
        req.send();

        req.addEventListener('load', function(){
            //const data = JSON.parse(req.response).instrucoes
            const data = req.response.instrucoes 
            console.log(data)
            let cartoes = []

            for(const ajuda of data){
                cartoes.push(criaCartao(ajuda))
            }
/*             for(let a of data.instrucoes){
                cartoes.push(criaCartao(a))
            } */
            
        })
/* 

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
        }] */

        /* lista.forEach((help)=>{
            console.log(help)
        }) */


    })
})()