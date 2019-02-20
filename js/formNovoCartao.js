;(function () {
    const form = document.querySelector('.formNovoCartao')
    form.classList.remove('no-js')

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const textarea = form.querySelector('textarea')
        const value = textarea.value.trim()
        const isTextareaVazio = value == '';
        console.log(isTextareaVazio)
        if (isTextareaVazio) {
            //alert('Preencha algo')
            const msg = document.createElement('p')
            msg.classList.add("formNovoCartao-msg")
            msg.textContent = "Form inválido"
            textarea.insertAdjacentElement('afterend', msg)
            msg.addEventListener('animationend', function (event) {
                this.remove()
            })
            console.log(msg)
            //textarea.placeholder = 'Preencha algo'
        } else {
            const cartao = criaCartao(textarea.value)
            form.reset();
            cartao.focus();



        }

    })


})()
