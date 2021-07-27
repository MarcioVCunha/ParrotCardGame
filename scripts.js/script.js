let numeroCartas = 0;

function validar(){
    let cartasSuficientes = Boolean(numeroCartas >= 4 && numeroCartas <= 14);
    let par = Boolean(numeroCartas%2 === 0);

    if(cartasSuficientes && par){

    } else {
        numeroCartas = prompt("Com quantas cartas deseja jogar? (Entre 4 e 14 e deve ser par)");

        validar();
    }
}

validar();