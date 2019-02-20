;(function () {
    const form = document.querySelector('.formNovoCartao')
    form.classList.remove('no-js')

    const cartoes = document.querySelectorAll('.cartao')
    let contador = cartoes.length;

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

            contador++

            const cartao = document.createElement('article')
            cartao.classList.add('cartao')
            cartao.tabIndex = 0
            cartao.id = `cartao_${contador}` 
            //cartao.textContent = textarea.value


            cartao.innerHTML = 
            `
            <div class="opcoesDoCartao">
            <button  class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
                <svg><use xlink:href="#iconeRemover"></use></svg>
            </button>

            <input type="radio" name="corDoCartao${contador}" value="#EBEF40" id="corPadrão-cartao${contador}" class="opcoesDoCartao-radioTipo" checked>
            <label for="corPadrão-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">
                Padrão
            </label>

            <input type="radio" name="corDoCartao${contador}" value="#F05450" id="corImportante-cartao${contador}" class="opcoesDoCartao-radioTipo">
            <label for="corImportante-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">
                Importante
            </label>

            <input type="radio" name="corDoCartao${contador}" value="#92C4EC" id="corTarefa-cartao${contador}" class="opcoesDoCartao-radioTipo">
            <label for="corTarefa-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">
                Tarefa
            </label>

            <input type="radio" name="corDoCartao${contador}" value="#76EF40" id="corInspiração-cartao${contador}" class="opcoesDoCartao-radioTipo">
            <label for="corInspiração-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">
                Inspiração
            </label>
            </div>
            <p class="cartao-conteudo" contenteditable tabindex="0">${textarea.value}</p>
            `
            cartao.addEventListener('focusin', function (event) {
                //callback
                this.classList.add('cartao--focado')
            })
            cartao.addEventListener('focusout', function (event) {
                //callback
                this.classList.remove('cartao--focado')

            })
            cartao.addEventListener('change', function (event) {
                const input = event.target
                const radio = input.classList.contains('opcoesDoCartao-radioTipo')
                if (radio) {
                    cartao.style.backgroundColor = input.value
                }

            })
            cartao.addEventListener('keyup', function (event) {
                const label = event.target
                if (label.classList.contains('opcoesDoCartao-tipo') && (event.code == 'Space' || event.code == 'Enter')) {
                    cartao.style.backgroundColor = label.style.color
                    //event.target.click()
                }
            })
            cartao.addEventListener('click', function (event) {

                if (event.target.classList.contains('opcoesDoCartao-remove')) {
                    cartao.classList.add('cartao--some')
                    cartao.addEventListener('transitioned', this.remove)
                }
            })

            const mural = document.querySelector('.mural')
            mural.insertAdjacentElement('beforeend', cartao)
            form.reset();


        }

    })


})()
