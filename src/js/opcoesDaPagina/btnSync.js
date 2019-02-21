;(function(){
    'use strict'

    const btnSync = document.querySelector('#btnSync')
    btnSync.classList.remove('no-js')

    btnSync.addEventListener('click', function(event){
        const cartoes = document.querySelectorAll('.cartao')
        const data = []

        btnSync.classList.add('botaoSync--esperando')
        btnSync.classList.remove('botaoSync--sincronizado')

        for(const cartao of cartoes){
            let elemento = {
                conteudo: cartao.querySelector('p').textContent,
                cor: cartao.style.backgroundColor
            }
            data.push(elemento) 
        }
                        /*
                ou
                const conteudo = cartao.querySelector('p').textContent
                const cor = cartao.style.backgroundColor

                */


        const dadosUser = {
            usuario: "gabi",
            cartoes: data
        }

        const req = new XMLHttpRequest()
        req.open('POST','https://ceep.herokuapp.com/cartoes/salvar')
        req.setRequestHeader('Content-Type', 'application/json');
        req.send(JSON.stringify(dadosUser))
        req.addEventListener('load',()=>{
            console.log(req.response)
            btnSync.classList.remove('botaoSync--esperando')
            btnSync.classList.add('botaoSync--sincronizado')
        })

        req.addEventListener('error', function(){
            btnSync.classList.remove('botaoSync--esperando')
            btnSync.classList.add('botaoSync--deuRuim')
        })

        
/*         req.open('GET', 'https://ceep.herokuapp.com/cartoes/instrucoes');
        req.responseType = 'json'
        req.send();
        req.addEventListener('load',function(){
            ajuda = req.response.instrucoes
            

                let isValid = true;
                ajuda.forEach(element => {
                   if(element.conteudo == elemento.conteudo){
                    isValid = false;
                   }
                });
                if (isValid){

                }
        }) */

        
        //data = JSON.stringify(data)

        

    })
})()