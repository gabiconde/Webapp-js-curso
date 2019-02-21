;(function(){
    'use strict';
    //Localiza elemento
    const button = document.querySelector('#btnMudaLayout');
    const orientacao = document.querySelector('.mural');
    button.classList.remove('no-js')

    button.addEventListener('click', ()=>{
        orientacao.classList.toggle('mural--linha')
    })
    ;
    button.addEventListener('click',() => {
        button.textContent.trim() == 'Linhas' ? button.textContent = 'Blocos' : button.textContent ='Linhas'
    })

})()


//function mudaText(){}
//button.onclick = mudaText

/* function main(){
    //let newButton = 
    mudaLayout(button.textContent)
}
main()
 */

