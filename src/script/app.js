import { personagensHoraDeAventura } from './dados.js';

var containetCards = document.querySelector('.cartoes-personagens');
var conteinerMiniCards = document.querySelector('.listagem ul');
var listPersonagens = personagensHoraDeAventura;

listPersonagens.forEach(cadaUm => {
    var templateLista = `
          <li class="aventure" id="mini-${cadaUm.id}">
            <img src="./src/imagem/${cadaUm.imgSrc}" alt="icone do personagem">
            <span>${cadaUm.nome}</span>
          </li>
    `;
    
    var templateCard = `
          <div class="cartao ${cadaUm.tipo} " id="cartao-${cadaUm.id}">
             <div class="cartao-top">
                <h2 class="nome">${cadaUm.nome}</h2>
                <img src="./src/imagem/${cadaUm.imgSrc}" alt="imagem maior do personagem">
             </div>
             <div class="cartao-informacao">
                <h3>Descrição</h3>
                <div class="descricao">
                   <p>${cadaUm.descricao}</p>
                </div>
             </div>
          </div>
    `;
    
    containetCards.innerHTML += templateCard;
    conteinerMiniCards.innerHTML += templateLista;
});

const listaSelecaoPersonagens = document.querySelectorAll('.aventure');
var inicial = 2;
var loopPersonagens;

function iniciarCarrossel() {
    clearInterval(loopPersonagens);

    loopPersonagens = setInterval(() => {
        var qtdMax = personagensHoraDeAventura.length;

        cartaoOculto();
        listColorOculto();
        
        const miniaturaAtiva = document.querySelector('#mini-' + inicial);
        const cartaoAtivo = document.querySelector('#cartao-' + inicial);

        if (cartaoAtivo && miniaturaAtiva) {
            cartaoAtivo.classList.add('visivel');
            miniaturaAtiva.classList.add('ativo');
            
            miniaturaAtiva.scrollIntoView({
                behavior: 'smooth',
                inline: 'center',
                block: 'nearest'
            });
        }
        
        inicial++;
        if (inicial > qtdMax) inicial = 1;
        
    }, 30000);
}

function listColorVisivel(itemListaSelecionado) {
    const itemQueVaiSerSelecionaod = document.getElementById(itemListaSelecionado);
    itemQueVaiSerSelecionaod.classList.add('ativo');
}

function listColorOculto() {
    const itemSelecionado = document.querySelector('.ativo');
    if (itemSelecionado) itemSelecionado.classList.remove('ativo');
}

function cartaoVisivel(aventura) {
    const itemListaSelecionado = aventura.attributes.id.value;
    const idNum = itemListaSelecionado.split('-')[1];
    const cartaoPersonagemAbrir = document.getElementById('cartao-' + idNum);
    cartaoPersonagemAbrir.classList.add('visivel');
    return itemListaSelecionado;
}

function cartaoOculto() {
    const personagemVisivel = document.querySelector('.visivel');
    if (personagemVisivel) personagemVisivel.classList.remove('visivel');
}

listaSelecaoPersonagens.forEach(aventura => {
    aventura.addEventListener("click", () => {
        cartaoOculto();
        const itemListaSelecionado = cartaoVisivel(aventura);
        listColorOculto();
        listColorVisivel(itemListaSelecionado);
        
        const idClicado = parseInt(aventura.id.split('-')[1]);
        inicial = idClicado + 1;
        if (inicial > personagensHoraDeAventura.length) inicial = 1;
        
        iniciarCarrossel();
    });
});

document.querySelector('#cartao-1').classList.add('visivel');
document.querySelector('#mini-1').classList.add('ativo');
iniciarCarrossel();
