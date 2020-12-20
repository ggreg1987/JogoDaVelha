let x = document.querySelector(".x");
let o = document.querySelector(".o");
let blocos = document.querySelectorAll(".box");
let bloco1 = document.getElementById('bloco1');
let bloco2 = document.getElementById('bloco2');
let bloco3 = document.getElementById('bloco3');
let bloco4 = document.getElementById('bloco4');
let bloco5 = document.getElementById('bloco5');
let bloco6 = document.getElementById('bloco6');
let bloco7 = document.getElementById('bloco7');
let bloco8 = document.getElementById('bloco8');
let bloco9 = document.getElementById('bloco9');


let jogador1 = 0;
let jogador2 = 0;

for(let i = 0; i < blocos.length; i++) {

    blocos[i].addEventListener("click",  function() {

        let elemento;

        if(jogador1 == jogador2) {
            elemento = x;
        } else {
            elemento = o;
        }

        if(this.childNodes.length == 0) {

            let cloneElemento = elemento.cloneNode(true);

            this.appendChild(cloneElemento);

            if(jogador1 == jogador2) {
                jogador1++;
            } else {
                jogador2++;
            }

            checarCondicao();

        }

    });

}

function checarCondicao(){

    if(bloco1.childNodes.length > 0 && bloco2.childNodes.length > 0 && bloco3.childNodes.length > 0) {

        let bloco1Child = bloco1.childNodes[0].className;
        let bloco2Child = bloco2.childNodes[0].className;
        let bloco3Child = bloco3.childNodes[0].className;

        if(bloco1Child == "x" && bloco2Child == "x" && bloco3Child == "x") {
            placar("x");

        } else if(bloco1Child == "o" && bloco2Child == "o" && bloco3Child == "o") {
            placar("o");
        }
    }

    if(bloco4.childNodes.length > 0 && bloco5.childNodes.length > 0 && bloco6.childNodes.length > 0) {

        let bloco4Child = bloco4.childNodes[0].className;
        let bloco5Child = bloco5.childNodes[0].className;
        let bloco6Child = bloco6.childNodes[0].className;

        if(bloco4Child == "x" && bloco5Child == "x" && bloco6Child == "x") {
            placar("x");

        } else if(bloco4Child == "o" && bloco5Child == "o" && bloco6Child == "o") {
            placar("o");
        }
    }

    if(bloco7.childNodes.length > 0 && bloco8.childNodes.length > 0 && bloco9.childNodes.length > 0) {

        let bloco7Child = bloco7.childNodes[0].className;
        let bloco8Child = bloco8.childNodes[0].className;
        let bloco9Child = bloco9.childNodes[0].className;

        if(bloco7Child == "x" && bloco8Child == "x" && bloco9Child == "x") {
            placar("x");

        } else if(bloco7Child == "o" && bloco8Child == "o" && bloco9Child == "o") {
            placar("o");
        }
    }

    if(bloco1.childNodes.length > 0 && bloco4.childNodes.length > 0 && bloco7.childNodes.length > 0) {

        let bloco1Child = bloco1.childNodes[0].className;
        let bloco4Child = bloco4.childNodes[0].className;
        let bloco7Child = bloco7.childNodes[0].className;

        if(bloco1Child == "x" && bloco4Child == "x" && bloco7Child == "x") {
            placar("x");

        } else if(bloco1Child == "o" && bloco4Child == "o" && bloco7Child == "o") {
            placar("o");
        }
    }

    if(bloco2.childNodes.length > 0 && bloco5.childNodes.length > 0 && bloco8.childNodes.length > 0) {

        let bloco2Child = bloco2.childNodes[0].className;
        let bloco5Child = bloco5.childNodes[0].className;
        let bloco8Child = bloco8.childNodes[0].className;

        if(bloco2Child == "x" && bloco5Child == "x" && bloco8Child == "x") {
            placar("x");

        } else if(bloco2Child == "o" && bloco5Child == "o" && bloco8Child == "o") {
            placar("o");
        }
    }

    if(bloco3.childNodes.length > 0 && bloco6.childNodes.length > 0 && bloco9.childNodes.length > 0) {

        let bloco3Child = bloco3.childNodes[0].className;
        let bloco6Child = bloco6.childNodes[0].className;
        let bloco9Child = bloco9.childNodes[0].className;

        if(bloco3Child == "x" && bloco6Child == "x" && bloco9Child == "x") {
            placar("x");

        } else if(bloco3Child == "o" && bloco6Child == "o" && bloco9Child == "o") {
            placar("o");
        }
    }

    if(bloco1.childNodes.length > 0 && bloco5.childNodes.length > 0 && bloco9.childNodes.length > 0) {

        let bloco1Child = bloco1.childNodes[0].className;
        let bloco5Child = bloco5.childNodes[0].className;
        let bloco9Child = bloco9.childNodes[0].className;

        if(bloco1Child == "x" && bloco5Child == "x" && bloco9Child == "x") {
            placar("x");

        } else if(bloco1Child == "o" && bloco5Child == "o" && bloco9Child == "o") {
            placar("o");
        }
    }

    if(bloco3.childNodes.length > 0 && bloco5.childNodes.length > 0 && bloco7.childNodes.length > 0) {

        let bloco3Child = bloco3.childNodes[0].className;
        let bloco5Child = bloco5.childNodes[0].className;
        let bloco7Child = bloco7.childNodes[0].className;

        if(bloco3Child == "x" && bloco5Child == "x" && bloco7Child == "x") {
            placar("x");

        } else if(bloco3Child == "o" && bloco5Child == "o" && bloco7Child == "o") {
            placar("o");
        }
    }

    let contador = 0;

    for(let i = 0; i < blocos.length; i++ ) {
        if(blocos[i].childNodes[0] != undefined) {
            contador++;
        }

        if(contador == 9) {
            console.log("jogo encerrado");
        }

    }

}

function placar(elemento) {
    let player1 = document.querySelector("#pontuacao-player1");
    let player2 = document.querySelector('#pontuacao-player2');

    if(elemento == 'x') {
        player1.textContent = parseInt(player1.textContent) + 1;
    } else if(elemento == 'o') {
        player2.textContent = parseInt(player2.textContent) + 1;
    }
   
}

function limparTela() {
    let limparBlocos = document.querySelectorAll(".box div");

}