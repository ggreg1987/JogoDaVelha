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

        }

    });

}