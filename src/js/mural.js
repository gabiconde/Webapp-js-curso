;(function(){
/*     const ajax = new XMLHttpRequest()
    ajax.open('POST','https://ceep.herokuapp.com/cartoes/carregar')
    ajax.setRequestHeader('Content-Type', 'application/json');
    ajax.send(JSON.stringify({usuario:"gabi"})) */

    $.ajax({
        url: 'https://ceep.herokuapp.com/cartoes/carregar',
        method:'GET',
        dataType:'jsonp',
        data: {usuario:"gabi"},
        success: function(response){
            response.cartoes.forEach(element => {
                criaCartao(element)
            });
            console.log(response.cartoes)
        }
    })
})()