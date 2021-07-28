let numeroCartas = 0;
let esperar = false;
let cartasReveladas;

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
    let cartasJogaveis = document.querySelector('.jogo');

    while(contador < numeroCartas){
        lista += ('<li class="carta" onclick="mudarCarta(this);"> <img src="assets/front.png" alt="Carta do jogo"> </li>')

        contador += 1;
    }

    cartasJogaveis.innerHTML = lista;
}

function mudarCarta(elemento){
    cartasReveladas = document.getElementsByClassName("revelado");


    if(esperar === false){
        elemento.innerHTML = '<img src="assets/bobrossparrot.gif" alt="Carta do jogo">';
        elemento.classList.add('revelado');
    }

    if(cartasReveladas.length === 2){
        esperar = true;

        setTimeout(conferirCartasViradas, 1000);
    }
}

function conferirCartasViradas(){
    while(cartasReveladas.length !== 0){
        cartasReveladas[0].innerHTML = '<img src="assets/front.png" alt="Carta do jogo">';
        cartasReveladas[0].classList.remove("revelado");
    }

    esperar = false;
}

validar();