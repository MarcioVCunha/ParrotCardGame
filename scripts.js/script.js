let numeroCartas = 0;
let numeroCartasViradas = 0;
let acertos = 0;
let numeroDeJogadas = 0;
let cartaAnterior;

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
        lista += (`<div class="carta"> <div class="face front-face flipCard" onclick="mudarCarta(this);"> <img src="assets/front.png" alt="Carta do jogo"> </div> <div class="face back-face"> <img src="assets/${listaGifsFinal[i]}"> </div> </div>`)
    }

    jogo.innerHTML = lista;
}

function comparador() {
	return Math.random() - 0.5;
}

function mudarCarta(elemento){
    let carta = elemento.parentNode;
    carta.querySelector('.back-face').classList.add('flipCard')
    elemento.classList.remove('flipCard');

    numeroDeJogadas ++;

    validarAcerto(elemento, carta);
}

function validarAcerto(elemento, carta){
    let elementBackFace = elemento.parentNode.querySelector('.back-face');
    
    numeroCartasViradas ++;

    if(numeroCartasViradas === 1){
        cartaAnterior = elementBackFace;
    } else {
        if(cartaAnterior.innerHTML === elementBackFace.innerHTML){
            acertos ++;


            if(acertos === numeroCartas/2){
                alert(`Você ganhou em ${numeroDeJogadas} jogadas!`)
            }

        } else {
            setTimeout(desvirar, 1000, elemento, carta, cartaAnterior);
        }

        numeroCartasViradas = 0;
    }
}

function desvirar(elemento, carta, cartaAnterior){
    carta.querySelector('.back-face').classList.remove('flipCard');
    elemento.classList.add('flipCard');

    cartaAnterior.classList.remove('flipCard');
    cartaAnterior.parentNode.querySelector('.front-face').classList.add('flipCard');
}

validar();