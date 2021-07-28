let numeroCartas = 0;
jogo = document.querySelector('.jogo');

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
        lista += ('<li class="carta" onclick="mudarCarta(this);"> <img src="assets/front.png" alt="Carta do jogo"> </li>')

        contador += 1;
    }

    jogo.innerHTML = lista;
    jogo.classList.remove('sumir');
}



/* minhaArray.sort(comparador);

function comparador() { 
	return Math.random() - 0.5; 
} */

validar();