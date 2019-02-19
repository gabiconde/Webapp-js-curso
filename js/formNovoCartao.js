;(function(){
    const form = document.querySelector('.formNovoCartao')
    form.classList.remove('no-js')

    form.addEventListener('submit', function(event){
        event.preventDefault();
        const textarea = form.querySelector('textarea')
        const value = textarea.value.trim()
        const isTextareaVazio = value == '';

        if(isTextareaVazio){
            alert('Preencha algo')
            let msg = document.createElement("p")
            msg.classList.add("formNovoCartao-msg")
            msg.textContent = "Form inválido"

            //textarea.placeholder = 'Preencha algo'
        }else{
            console.log(value)
        }

    })


})()
