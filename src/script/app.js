const listaSelecaoPersonagens = document.querySelectorAll('.aventure');


listaSelecaoPersonagens.forEach(aventura => {
    aventura.addEventListener("click", () => {
        cartaoOculto();
        
        const itemListaSelecionado = cartaoVisivel(aventura);

        listColorOculto();

        listColorVisivel(itemListaSelecionado);
    });
});


function listColorVisivel(itemListaSelecionado) {
    const itemQueVaiSerSelecionaod = document.getElementById(itemListaSelecionado);
    itemQueVaiSerSelecionaod.classList.add('ativo');
}


function listColorOculto() {
    const itemSelecionado = document.querySelector('.ativo');
    itemSelecionado.classList.remove('ativo');
}


function cartaoVisivel(aventura) {
    const itemListaSelecionado = aventura.attributes.id.value;

    const idCartaoPersonagem = "cartao-" + itemListaSelecionado;

    const cartaoPersonagemAbrir = document.getElementById(idCartaoPersonagem);
    cartaoPersonagemAbrir.classList.add('visivel');
    return itemListaSelecionado;
}


function cartaoOculto() {
    const personagemVisivel = document.querySelector('.visivel');
    personagemVisivel.classList.remove('visivel');
}
