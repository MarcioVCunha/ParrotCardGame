let numeroCartas = 0;
let listaGifs = ['bobrossparrot.gif', 'explodyparrot.gif', 'fiestaparrot.gif', 'metalparrot.gif', 'revertitparrot.gif', 'tripletsparrot.gif', 'unicornparrot.gif'].sort(comparador);
const jogo = document.querySelector('.jogo');
let listaGifsFinal = [];


function validar(){
    let cartasSuficientes = Boolean(numeroCartas >= 4 && numeroCartas <= 14);
    let par = Boolean(numeroCartas%2 === 0);

    if(!(cartasSuficientes && par)){
        numeroCartas = prompt("Com quantas cartas deseja jogar? (Entre 4 e 14 e deve ser par)");

        validar();
    } else {
        criarJogo();
    }
}

function criarJogo(){
    let contador = 0;
    let lista = '';

    while(contador < numeroCartas){
        lista += ('<li name="' + contador + '" class="carta" onclick="mudarCarta(this);"> <img src="assets/front.png " alt="Carta do jogo"> </li>')

        contador += 1;
    }

    contador = 0;

    while(contador < numeroCartas/2){
        let contadorAux = 0;

        while(contadorAux < 2){
            listaGifsFinal.push(listaGifs[contador]);
            contadorAux += 1
        }

        contador += 1;
    }

    listaGifsFinal = listaGifsFinal.sort(comparador);

    jogo.innerHTML = lista;
    jogo.classList.remove('sumir');
}

function comparador() {
	return Math.random() - 0.5;
}

function mudarCarta(elemento){
    elemento.innerHTML = '<img src="assets/'+ listaGifsFinal[elemento.getAttribute('name')] +'" alt="Carta do jogo">';
}

validar();