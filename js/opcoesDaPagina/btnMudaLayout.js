//Localiza elemento
const button = document.querySelector('#btnMudaLayout');
const orientacao = document.querySelector('.mural');

function mudaText(){
    console.log(button.textContent)
    button.textContent.trim() == 'Linhas' ? button.textContent = 'Blocos' : button.textContent ='Linhas'
}
//button.onclick = mudaText;


function mudaLayout(){
    orientacao.classList.toggle('mural--linha')
}

button.addEventListener('click', mudaLayout)
button.addEventListener('click',mudaText)

button.classList.remove('no-js')
/* function main(){
    //let newButton = 
    mudaLayout(button.textContent)
}
main()
 */

