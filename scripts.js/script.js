let numeroCartas = 0;

//Pegando os gifs em ordem aleatória
let listaGifs = ['bobrossparrot.gif', 'explodyparrot.gif', 'fiestaparrot.gif', 'metalparrot.gif', 'revertitparrot.gif', 'tripletsparrot.gif', 'unicornparrot.gif'].sort(comparador);

const jogo = document.querySelector('.jogo');


function validar(){
    let cartasSuficientes = Boolean(numeroCartas >= 4 && numeroCartas <= 14);
    let par = Boolean(numeroCartas%2 === 0);

    if(cartasSuficientes && par){
        criarJogo();
    } else {
        numeroCartas = Number(prompt("Com quantas cartas deseja jogar? (Entre 4 e 14 e deve ser par)"));

        validar();
    }
}

function criarJogo(){
    let listaGifsFinal = [];

    for(let i = 0; i < numeroCartas/2; i += 1){
        for(let j = 0; j < 2; j += 1){
            listaGifsFinal.push(listaGifs[i]);
        }
    }

    listaGifsFinal = listaGifsFinal.sort(comparador);

    let lista = '';

    for(let i = 0; i < numeroCartas; i += 1){
        lista += ('<div class="carta"> <div class="front-face face" onclick="mudarCarta(this);"> <img src="assets/front.png" alt="Carta do jogo"> </div> <div class="back-face face"> <img src="assets/bobrossparrot.gif"> </div> </div>')
    }

    jogo.innerHTML = lista;
}

function comparador() {
	return Math.random() - 0.5;
}

function mudarCarta(elemento){
    elemento.classList.add("flipCard");
}

validar();